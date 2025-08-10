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

  // Добавляем meta теги для правильных MIME type
  const metaTags = `
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">`;

  // Вставляем meta теги после <head>
  content = content.replace(/<head>/, `<head>${metaTags}`);

  // Убеждаемся, что скрипт имеет type="module"
  content = content.replace(
    /<script crossorigin src="([^"]*\.js)"/g,
    '<script type="module" crossorigin src="$1"'
  );

  fs.writeFileSync(indexPath, content);
  console.log("✅ Paths fixed in dist/index.html");
} else {
  console.log("❌ dist/index.html not found");
}
