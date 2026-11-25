// Checks src/data/prices.json before every build so a typo never breaks the live price table.
import { readFileSync } from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../src/data/prices.json', import.meta.url), 'utf8'));
const errors = [];
if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt)) errors.push('updatedAt 必須是 YYYY-MM-DD');
const slugs = new Set();
for (const cat of data.categories) {
  for (const m of cat.models) {
    const where = `${cat.slug}/${m.slug}`;
    if (!/^[a-z0-9-]+$/.test(m.slug)) errors.push(`${where}: slug 只可用細楷英文、數字及 -`);
    if (slugs.has(where)) errors.push(`${where}: slug 重複`);
    slugs.add(where);
    if (!m.name || !m.series) errors.push(`${where}: 缺少 name 或 series`);
    if (!Array.isArray(m.variants) || !m.variants.length) errors.push(`${where}: 最少要有一個 variant`);
    for (const v of m.variants ?? []) {
      if (!v.label) errors.push(`${where}: variant 缺少 label`);
      if (v.price !== null && (!Number.isInteger(v.price) || v.price <= 0))
        errors.push(`${where} ${v.label}: price 必須是正整數或 null`);
      if (v.source !== undefined && v.source !== 'okhk') errors.push(`${where} ${v.label}: source 只可以是 "okhk"（tradein 價錢不用填 source）`);
      if (v.source && v.price === null) errors.push(`${where} ${v.label}: 有 source 但沒有 price`);
    }
  }
}
if (errors.length) {
  console.error('prices.json 有錯：\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`prices.json OK：${slugs.size} 個型號，更新日期 ${data.updatedAt}`);
