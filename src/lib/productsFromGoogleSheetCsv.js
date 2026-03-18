const normalizeKey = (s) =>
  String(s ?? '')
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, '');

// Minimal CSV parser (handles quoted cells and commas inside quotes).
const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (ch === '"') {
      // Escaped quote inside quoted cell
      if (inQuotes && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      // Handle CRLF and ignore consecutive newlines
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(cell);
      cell = '';
      // Avoid adding a trailing empty row
      if (row.some((c) => String(c ?? '').trim() !== '')) rows.push(row);
      row = [];
      continue;
    }

    cell += ch;
  }

  // Flush last cell/row
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    if (row.some((c) => String(c ?? '').trim() !== '')) rows.push(row);
  }

  return rows;
};

const pick = (rowMap, keys) => {
  for (const k of keys) {
    const val = rowMap[k];
    if (val != null && String(val).trim() !== '') return String(val).trim();
  }
  return '';
};

const toNumber = (value) => {
  const raw = String(value ?? '').trim();
  if (!raw) return 0;
  const cleaned = raw.replace(/[^0-9.]/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
};

/**
 * Reads products from a Google Sheets published CSV.
 *
 * Expected header columns (case-insensitive, spaces/underscores ignored):
 * - id (optional)
 * - name
 * - description
 * - priceStandard
 * - pricePro
 * - image
 * - battery
 * - waterproof
 * - range
 */
export async function fetchProductsFromGoogleSheetCsv(csvUrl) {
  const res = await fetch(csvUrl);
  if (!res.ok) throw new Error(`Failed to fetch CSV (${res.status})`);
  const text = await res.text();

  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const headers = rows[0].map(normalizeKey);

  const products = [];
  for (let r = 1; r < rows.length; r += 1) {
    const cols = rows[r];
    const rowMap = {};

    for (let c = 0; c < headers.length; c += 1) {
      const key = headers[c];
      if (!key) continue;
      rowMap[key] = cols[c] ?? '';
    }

    const idVal = pick(rowMap, ['id', 'productid', 'productidnumber']);
    const idParsed = toNumber(idVal);

    const name = pick(rowMap, ['name']);
    if (!name) continue; // Skip empty rows

    const priceStandard = toNumber(pick(rowMap, ['pricestandard', 'price_standard']));
    const pricePro = toNumber(pick(rowMap, ['pricepro', 'price_pro']));

    const product = {
      id: idParsed || products.length + 1,
      name,
      description: pick(rowMap, ['description', 'desc']),
      priceStandard,
      pricePro,
      image: pick(rowMap, ['image', 'img']),
      specs: {
        battery: pick(rowMap, ['battery', 'specsbattery']),
        waterproof: pick(rowMap, ['waterproof', 'specswaterproof']),
        range: pick(rowMap, ['range', 'specsrange']),
      },
    };

    products.push(product);
  }

  return products;
}

