import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, "dist", "index.html");

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, "utf8");

  // Исправляем путь к vite.svg
  content = content.replace(
    /href="\.\/vite\.svg"/g,
    'href="/taskManagerTaskQuestion/vite.svg"'
  );

  // Убираем type="module" для IIFE формата
  content = content.replace(
    /<script type="module" crossorigin/g,
    "<script crossorigin"
  );

  fs.writeFileSync(indexPath, content);
  console.log("✅ Paths fixed in dist/index.html");
} else {
  console.log("❌ dist/index.html not found");
}
