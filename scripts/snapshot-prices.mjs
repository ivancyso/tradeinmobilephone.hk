// Saves a copy of prices.json into src/data/history/<updatedAt>.json.
// The site compares the current prices with the latest earlier snapshot to show ▲▼ changes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = new URL('../src/data/prices.json', import.meta.url);
const data = JSON.parse(readFileSync(src, 'utf8'));
const dir = new URL('../src/data/history/', import.meta.url);
mkdirSync(dir, { recursive: true });
const out = new URL(`${data.updatedAt}.json`, dir);
writeFileSync(out, JSON.stringify(data, null, 2) + '\n');
console.log(`已保存 ${out.pathname}`);
