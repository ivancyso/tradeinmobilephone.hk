# Content brief for guides

Applies to every file in `src/content/guides/*.json`. Read `docs/topical-map.md` first for each post's topic, role and keywords.

## Format (JSON)

```json
{
  "title": "…",            // ≤ 32 全形字. Starts with the target keyword. Include 2026 only for time-sensitive topics.
  "description": "…",      // 70–150 字. Contains the target keyword. Says what the reader gets.
  "keyword": "…",          // target keyword from the topical map
  "topic": "recycling",    // topic id from src/data/topics.json
  "role": "pillar",        // "pillar" or "cluster"
  "category": "general",   // iphone | samsung | ipad | macbook | general (controls the sidebar price box)
  "publishedAt": "2026-11-25",
  "updatedAt": "2026-11-26",
  "summary": ["…"],        // 3–5 bullets, each one self-contained fact (shown in the answer box at the top)
  "faqs": [{ "q": "…", "a": "…" }],   // 4–6 for pillars, 3–5 for clusters; answer-first, 1–3 sentences
  "body": "Markdown"        // see below
}
```

## Length

- **Pillar:** 3,500–5,000 Chinese characters of body.
- **Cluster:** 2,200–3,500 Chinese characters of body.

Length must come from useful substance (steps, tables, examples, numbers, edge cases), not padding.

## Writing style

- Hong Kong Traditional Chinese, 書面語 with natural HK terms (手機, 屏幕, 轉數快 FPS, 港鐵, 行貨/水貨). Full-width punctuation.
- **Answer first.** The first paragraph answers the target query in 1–2 sentences with the key number or verdict in **bold**. Each H2 section also opens with a sentence that answers that section's question on its own (AI assistants quote these passages).
- H2 for main sections, H3 inside. 6–10 H2 for pillars, 4–7 for clusters. Use at least one comparison table and one numbered step list where it fits.
- Short paragraphs (2–4 sentences). No filler like 「相信大家都知道」、「總括而言」.
- Do not use the brand name of any competing shop (no 收機王, no OK Store). 先達廣場 is a place name and is fine.
- Do not claim things about our own business beyond what the site already says: we quote online, arrange handover at an MTR station or agreed place, inspect on the spot (5–10 minutes), and pay by cash or FPS. No claims about years in business, number of customers, awards or media coverage.
- No invented statistics. Use general phrasing (一般、大約、通常) for market tendencies. Hard numbers must be prices via placeholders, or well-known facts (e.g. Apple releases new iPhones each September).
- Apple / Samsung programme details change; describe how they work in general and tell the reader to check the official site for current figures. Do not quote Apple Trade In amounts.

## Prices: placeholders only

Never type a recycling price. Use placeholders filled at build time from `src/data/prices.json`:

- `{{price:<category>/<model-slug>/<variant label>}}` e.g. `{{price:iphone/iphone-17-pro-max/256GB}}`
- `{{price:...*1.2}}` multiplies and rounds to $100 (for estimates)
- `{{date}}` the price update date

Labels must match `prices.json` exactly (e.g. `256GB`, `128GB Wi-Fi`, `M3 / 8 GB / 256 GB`). A wrong placeholder fails the build. Only use variants whose price is not null.

## Official fees (e.g. Apple repair prices)

Our own recycling prices are placeholders only. Official third-party fees (Apple battery or screen repair, AppleCare+) may be typed, but only as `HK$1,234`, with the date checked and a source URL in `docs/fact-check/<slug>.md`, plus a sentence telling readers to check the official page because fees change.

## Apple Hong Kong wording (verified on support.apple.com/zh-hk)

- Account: first mention 「Apple 帳户（前稱 Apple ID）」, then 「Apple 帳户」.
- Erase: 「設定」>「一般」>「轉移或重設 iPhone」>「清除所有內容和設定」.
- Battery: iPhone 15 and later (iOS 17.4+) 「設定」>「電池」>「電池健康度」 (also shows 循環使用次數, manufacture and first-use dates); iPhone 11–14 「設定」>「電池」>「電池健康與充電」.
- Parts history: 「設定」>「一般」>「關於本機」>「零件與維修記錄」; non-genuine parts show 「未知」.
- Sign out: 「設定」> [你的姓名] >「登出」.
- Apple Watch: 「取消配對 Apple Watch」.
- Setup screen after erase (device ready for new owner): 「哈囉」 (not 「你好」).

## Fact-checking while writing

Every factual claim (specs, menu paths, programme rules, fees, dates, legal or safety statements) must be verified with WebSearch against official sources first (support.apple.com/zh-hk, apple.com/hk, samsung.com/hk, gov.hk, police.gov.hk, consumer.org.hk), and logged in `docs/fact-check/<slug>.md` as a table: claim → verdict → source URL. Anything you cannot verify is written as a general tendency or left out. Claims about prices must match `src/data/prices.json`.

## Links

Internal links (Markdown) are required:

- Cluster → its pillar (in the first 2 sections and again near the end), plus 1–2 sibling clusters.
- Pillar → every cluster in its topic, plus money pages.
- Every post → at least 3 money pages: `/iphone/`, `/samsung/`, `/ipad/`, `/macbook/`, `/iphone/<slug>/`, `/samsung/<slug>/`, `/process/`, `/contact/`.
- Guide URLs are `/guides/<slug>/`. Model slugs come from `prices.json`.
- No external links.

End every post with a short call to action linking to `/` (search prices) or `/contact/`.
