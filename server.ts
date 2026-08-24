import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSsy-GGkmfUJ3hKu0s2psVNOAF_S3yfJrHgQeInDcsUkgMSRYR0ZXrwhdIhjTs39SdJktjGWdSppEXH/pub?gid=0&single=true&output=csv";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Proxy endpoint for Google Sheets CSV to avoid any CORS/timeout issues
  app.get("/api/sheet-data", async (_req, res) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(GOOGLE_SHEET_CSV_URL, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "text/csv,text/plain,*/*"
        }
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Google Sheets responded with status ${response.status}`);
      }

      const csvText = await response.text();
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.send(csvText);
    } catch (err: any) {
      console.error("Error fetching Google Sheets CSV:", err?.message || err);
      res.status(502).json({
        error: "Failed to fetch data from Google Sheets",
        details: err?.message || String(err),
        url: GOOGLE_SHEET_CSV_URL
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
