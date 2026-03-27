/**
 * Default Google Sheet (CSV export) for Vikram GPS Tracker products.
 * Sheet: https://docs.google.com/spreadsheets/d/15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE/edit
 *
 * The app fetches via `/google-sheet-export` (proxied in dev by Vite; on Netlify via `public/_redirects`)
 * so the browser avoids Google’s CSV CORS limits.
 */
export const DEFAULT_SHEET_ID = '15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE';
export const DEFAULT_SHEET_GID = '0';

/** Direct Google CSV URL (override with VITE_PRODUCTS_SHEET_CSV_URL if you use another sheet). */
export const DEFAULT_PRODUCTS_CSV_DIRECT_URL = `https://docs.google.com/spreadsheets/d/${DEFAULT_SHEET_ID}/export?format=csv&gid=${DEFAULT_SHEET_GID}`;

/** Same-origin path — Vite + Netlify proxy this to Google’s CSV. */
export const PRODUCTS_CSV_PROXY_PATH = '/google-sheet-export';

/**
 * CSV URL used by ProductGrid.
 * - Prefer env override (full https URL to any published CSV).
 * - Otherwise use same-origin proxy path (recommended).
 */
export function getProductsCsvUrl() {
  const fromEnv = import.meta.env.VITE_PRODUCTS_SHEET_CSV_URL;
  if (fromEnv && String(fromEnv).trim()) return String(fromEnv).trim();
  return PRODUCTS_CSV_PROXY_PATH;
}

/** How often to re-fetch products (ms). Default 60s. */
export function getProductsRefreshMs() {
  const raw = import.meta.env.VITE_PRODUCTS_REFRESH_MS;
  const n = raw != null && String(raw).trim() !== '' ? Number(raw) : 60_000;
  return Number.isFinite(n) && n >= 10_000 ? n : 60_000;
}
