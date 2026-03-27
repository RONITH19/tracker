# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Product data (Google Sheets)

Products load from this sheet by default (CSV via same-origin `/google-sheet-export` so the browser avoids CORS issues):

- [Vikram products sheet](https://docs.google.com/spreadsheets/d/15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE/edit?gid=0#gid=0)

Row 1 headers (case-insensitive): `id, name, description, priceStandard, pricePro, image, battery, waterproof, range`

**Set up Row 1 in your sheet:** we can’t edit your Google Sheet from this project. Either paste that header row into **A1:I1**, or in Google Sheets use **File → Import → Upload** and choose **`google-sheet-products-template.csv`** from this repo (it includes **9 products** from your listings, with descriptions and ₹ prices where you provided them).

Product photos are served from this site under **`/products/`** (see `public/products/`). Cropped assets (`crop-01-*.png` …) focus on the product shots and hide most WhatsApp chrome; source screenshots stay as `*-dashcams.png` / `personal-and-engine-cutoff.png` for re-running **`npm run crop-products`** after you replace images.

After you deploy, use full URLs in the `image` column if needed (e.g. `https://your-site.com/products/crop-01-personal-kit.png`).

The grid **re-fetches every 60 seconds** (change with `VITE_PRODUCTS_REFRESH_MS` in `.env`).

To use a **different** sheet, set `VITE_PRODUCTS_SHEET_CSV_URL` to its full `.../export?format=csv&gid=...` URL in `.env`.
