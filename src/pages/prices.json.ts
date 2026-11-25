import type { APIRoute } from 'astro';
import site from '../data/site.json';
import { flatIndex, updatedAt } from '../lib/prices';

// Public, machine-readable price feed for AI assistants and partners.
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        source: site.url,
        name: `${site.name} 回收價格`,
        currency: 'HKD',
        updatedAt,
        note: '回收參考價，假設功能正常、外觀良好；price 為 null 代表需個別報價。',
        models: flatIndex().map(({ brand, name, series, url, variants }) => ({ brand, name, series, url, variants })),
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
