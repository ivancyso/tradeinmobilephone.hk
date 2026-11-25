import type { APIRoute } from 'astro';
import site from '../data/site.json';

// Allow all search engines and AI crawlers: being cited by AI answers is part of the GEO goal.
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
