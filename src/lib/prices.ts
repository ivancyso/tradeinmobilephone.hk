import data from '../data/prices.json';
import site from '../data/site.json';

export type Variant = { label: string; price: number | null; note?: string };
export type Model = { slug: string; name: string; year: number; series: string; tags?: string[]; faqs?: { q: string; a: string }[]; variants: Variant[] };
export type Category = { slug: string; name: string; label: string; models: Model[] };

export const updatedAt: string = data.updatedAt;
export const categories = data.categories as Category[];

// Price history: every file in src/data/history is a dated snapshot of prices.json.
const snapshots = import.meta.glob<{ default: typeof data }>('../data/history/*.json', { eager: true });
const previous = Object.entries(snapshots)
  .map(([path, mod]) => ({ date: path.match(/(\d{4}-\d{2}-\d{2})\.json$/)?.[1] ?? '', data: mod.default }))
  .filter((s) => s.date && s.date < updatedAt)
  .sort((a, b) => (a.date < b.date ? 1 : -1))[0];

const prevIndex = new Map<string, number | null>();
if (previous) {
  for (const c of previous.data.categories as Category[])
    for (const m of c.models) for (const v of m.variants) prevIndex.set(`${c.slug}/${m.slug}/${v.label}`, v.price);
}
export const previousDate = previous?.date ?? null;

/** Price change since the previous snapshot, or null when unknown. */
export function priceChange(cat: string, model: string, v: Variant): number | null {
  const before = prevIndex.get(`${cat}/${model}/${v.label}`);
  if (before == null || v.price == null) return null;
  return v.price - before;
}

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

const prices = (m: Model) => m.variants.map((v) => v.price).filter((p): p is number => p != null);
export const maxPrice = (m: Model) => (prices(m).length ? Math.max(...prices(m)) : null);
export const minPrice = (m: Model) => (prices(m).length ? Math.min(...prices(m)) : null);

export const fmt = (p: number | null) => (p == null ? '查詢報價' : `$${p.toLocaleString('en-US')}`);

export function groupBySeries(models: Model[]) {
  const map = new Map<string, Model[]>();
  for (const m of models) map.set(m.series, [...(map.get(m.series) ?? []), m]);
  return [...map.entries()].map(([series, models]) => ({ series, models }));
}

export const modelUrl = (cat: string, m: Model) => `/${cat}/${m.slug}/`;

/** Flat list used by the search box and the public /prices.json feed. */
export function flatIndex() {
  return categories.flatMap((c) =>
    c.models.map((m) => ({
      cat: c.slug,
      brand: c.name,
      name: m.name,
      series: m.series,
      url: `${site.url}${modelUrl(c.slug, m)}`,
      path: modelUrl(c.slug, m),
      variants: m.variants,
      max: maxPrice(m),
    })),
  );
}

export function formatDateZh(d: string) {
  const [y, mo, da] = d.split('-').map(Number);
  return `${y}年${mo}月${da}日`;
}

/** Contact link: WhatsApp when configured in site.json, otherwise a pre-filled email. */
export function quoteHref(subject: string, body = '') {
  if (site.whatsapp) {
    return `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`${subject}\n${body}`)}`;
  }
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
export const contactLabel = site.whatsapp ? 'WhatsApp 報價' : '電郵報價';
