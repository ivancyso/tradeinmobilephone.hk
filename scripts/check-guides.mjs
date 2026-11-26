// Checks guide JSON files against docs/content-brief.md.
// Usage: node scripts/check-guides.mjs [slug ...]   (no args = all guides)
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const prices = JSON.parse(readFileSync(new URL('src/data/prices.json', root), 'utf8'));
const topics = JSON.parse(readFileSync(new URL('src/data/topics.json', root), 'utf8'));
const dir = new URL('src/content/guides/', root);
const all = readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : all;

const validPaths = new Set(['/', '/process/', '/contact/', '/guides/']);
for (const c of prices.categories) {
  validPaths.add(`/${c.slug}/`);
  for (const m of c.models) validPaths.add(`/${c.slug}/${m.slug}/`);
}
for (const s of all) validPaths.add(`/guides/${s}/`);
for (const t of topics) validPaths.add(`/guides/${t.pillar}/`);

const priceOf = (cat, slug, label) =>
  prices.categories.find((c) => c.slug === cat)?.models.find((m) => m.slug === slug)?.variants.find((v) => v.label === label);

let failed = false;
for (const slug of slugs) {
  const file = new URL(`${slug}.json`, dir);
  const errs = [];
  const warns = [];
  if (!existsSync(file)) { console.log(`✗ ${slug}: file not found`); failed = true; continue; }
  let g;
  try { g = JSON.parse(readFileSync(file, 'utf8')); } catch (e) { console.log(`✗ ${slug}: invalid JSON: ${e.message}`); failed = true; continue; }
  for (const k of ['title', 'description', 'keyword', 'topic', 'role', 'category', 'publishedAt', 'updatedAt', 'body'])
    if (!g[k]) errs.push(`missing ${k}`);
  const topic = topics.find((t) => t.id === g.topic);
  if (!topic) errs.push(`unknown topic "${g.topic}"`);
  if (!['pillar', 'cluster'].includes(g.role)) errs.push('role must be pillar or cluster');
  if (topic && g.role === 'pillar' && topic.pillar !== slug) errs.push(`topic ${g.topic} pillar is ${topic.pillar}, not ${slug}`);
  const text = [g.body, ...(g.summary || []), ...(g.faqs || []).map((f) => f.a)].join('\n');
  for (const m of text.matchAll(/\{\{price:([a-z0-9-]+)\/([a-z0-9-]+)\/([^}*]+?)(?:\*[\d.]+)?\}\}/g)) {
    const v = priceOf(m[1], m[2], m[3]);
    if (!v) errs.push(`bad placeholder ${m[0]}`);
    else if (v.price == null) errs.push(`placeholder has no price (null): ${m[0]}`);
  }
  if (/\{\{(?!price:|date\}\})/.test(text)) errs.push('unknown {{...}} placeholder');
  // Our own recycling prices must be placeholders. Official third-party fees (e.g. Apple repair fees)
  // may be typed only in the form HK$1,234 and must be sourced in docs/fact-check/<slug>.md.
  const typed = text.replace(/\{\{[^}]+\}\}/g, '').replace(/HK\$\s?\d[\d,]*/g, '').match(/\$\s?\d[\d,]{2,}/g);
  if (/HK\$\s?\d/.test(text) && !existsSync(new URL(`docs/fact-check/${slug}.md`, root))) errs.push('HK$ fees need a source log in docs/fact-check/<slug>.md');
  if (typed) errs.push(`typed prices found (use placeholders; official third-party fees must be written HK$…): ${[...new Set(typed)].slice(0, 5).join(' ')}`);
  for (const m of g.body.matchAll(/\]\((\/[^)\s#]*)\)/g)) if (!validPaths.has(m[1])) errs.push(`broken link ${m[1]}`);
  if (/https?:\/\//.test(g.body)) errs.push('external links are not allowed');
  if (/收機王|OK Store|okhk/i.test(text + g.title)) errs.push('competitor brand name used');
  const chars = (g.body.match(/[一-鿿]/g) || []).length;
  const [min, max] = g.role === 'pillar' ? [3500, 5500] : [2200, 3800];
  if (chars < min) errs.push(`body too short: ${chars} Chinese chars (min ${min})`);
  if (chars > max) warns.push(`body long: ${chars} Chinese chars (target ≤ ${max})`);
  const h2 = (g.body.match(/^## /gm) || []).length;
  if (h2 < (g.role === 'pillar' ? 6 : 4)) errs.push(`only ${h2} H2 sections`);
  const internal = new Set([...g.body.matchAll(/\]\((\/[^)\s#]*)\)/g)].map((m) => m[1]));
  const money = [...internal].filter((p) => !p.startsWith('/guides/'));
  if (money.length < 3) errs.push(`only ${money.length} links to money pages (need 3+)`);
  if (topic && g.role === 'cluster' && !internal.has(`/guides/${topic.pillar}/`)) errs.push(`cluster must link to its pillar /guides/${topic.pillar}/`);
  if ((g.faqs || []).length < 3) errs.push('need at least 3 FAQs');
  if ([...g.title].length > 34) warns.push(`title long (${[...g.title].length} chars)`);
  const dl = [...g.description].length;
  if (dl < 60 || dl > 160) warns.push(`description length ${dl}`);
  if (errs.length) failed = true;
  console.log(`${errs.length ? '✗' : '✓'} ${slug} (${g.role}, ${chars} 字, ${h2} H2, ${internal.size} links)`);
  for (const e of errs) console.log(`    ERROR ${e}`);
  for (const w of warns) console.log(`    warn  ${w}`);
}
process.exit(failed ? 1 : 0);
