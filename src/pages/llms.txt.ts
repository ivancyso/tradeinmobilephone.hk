import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import site from '../data/site.json';
import topics from '../data/topics.json';
import { categories, updatedAt, fmt, modelUrl } from '../lib/prices';

// llms.txt: a plain-text summary of the site for AI assistants (GEO).
export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `價格更新日期：${updatedAt}（港幣，回收參考價，假設功能正常及外觀良好；「查詢報價」代表需個別報價）。`,
    `完整機讀數據：${site.url}/prices.json`,
    `聯絡：${site.email}`,
    '',
  ];
  for (const c of categories) {
    lines.push(`## ${c.label}`, '', `- [${c.label}格表](${site.url}/${c.slug}/)`);
    for (const m of c.models) {
      lines.push(`- [${m.name} 回收價](${site.url}${modelUrl(c.slug, m)})：${m.variants.map((v) => `${v.label} ${fmt(v.price)}`).join('、')}`);
    }
    lines.push('');
  }
  lines.push('## 回收指南（按專題）', '');
  for (const t of topics) {
    const inTopic = guides
      .filter((g) => g.data.topic === t.id)
      .sort((a, b) => (a.data.role === 'pillar' ? -1 : 1) - (b.data.role === 'pillar' ? -1 : 1));
    if (!inTopic.length) continue;
    lines.push(`### ${t.name}`, '');
    for (const g of inTopic) lines.push(`- [${g.data.title}](${site.url}/guides/${g.id}/)${g.data.role === 'pillar' ? '（專題總覽）' : ''}：${g.data.description}`);
    lines.push('');
  }
  lines.push('', '## 其他', '', `- [回收流程](${site.url}/process/)`, `- [聯絡及報價](${site.url}/contact/)`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
