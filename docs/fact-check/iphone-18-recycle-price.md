# Fact-check: iphone-18-recycle-price

Checked 2026-11-26. Our recycling prices appear only as placeholders from `src/data/prices.json`. iPhone 18 Pro / 18 Pro Max variants are null in prices.json, so the post uses no iPhone 18 placeholders. Official Apple retail prices are typed as HK$ with the sources below. No Apple Trade In amounts are quoted.

Sources:
- NR18 = https://www.apple.com/hk/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/
- SPEC18 = https://www.apple.com/hk/iphone-18-pro/specs/
- BUY18 = https://www.apple.com/hk/shop/buy-iphone/iphone-18-pro
- NRDUO = https://www.apple.com/hk/newsroom/2026/09/apple-unveils-iphone-duo/
- DUO = https://www.apple.com/hk/iphone-duo/
- BUYDUO = https://www.apple.com/hk/shop/buy-iphone/iphone-duo
- LINEUP = https://www.apple.com/hk/iphone/
- BATT = https://support.apple.com/zh-hk/106348
- QS = https://support.apple.com/zh-hk/102659
- WARR = https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-traditional-chinese.html

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Apple launched iPhone 18 Pro and iPhone 18 Pro Max in September 2026 | correct | NR18 |
| 2 | HK pre-order 12 Sept 2026 8pm, HK on sale Friday 18 September 2026 (post states the sale date only) | correct | NR18 |
| 3 | iPhone Duo is Apple's first foldable iPhone, HK pre-order 16 Oct, on sale 23 October 2026 | correct | NRDUO; DUO |
| 4 | Apple HK iPhone lineup lists iPhone Duo, iPhone 18 Pro, iPhone Air, iPhone 17, iPhone 17e, iPhone 16 (and 15, 16e in nav). No standard iPhone 18 | correct as of 2026-11-26 | LINEUP |
| 5 | All three use the A20 Pro chip | correct | NR18; NRDUO |
| 6 | iPhone 18 Pro and 18 Pro Max storage: 256GB, 512GB, 1TB, 2TB (both models) | correct. Note: prices.json lists iPhone 18 Pro only to 1TB; Apple HK specs and store list a 2TB iPhone 18 Pro (HK$20,999). Flagged to the main session; the post states Apple's options | SPEC18; BUY18 |
| 7 | iPhone Duo storage 256GB–2TB | correct | NRDUO; DUO |
| 8 | 18 Pro / Pro Max colours 黑色、銀色、冰川色、布根地紅色 | correct | SPEC18; NR18 |
| 9 | iPhone Duo colours 星光白色、夜空色 | correct | DUO; NRDUO |
| 10 | 18 Pro 6.3 吋, 18 Pro Max 6.9 吋 | correct | SPEC18 |
| 11 | iPhone Duo inner 7.6 吋, outer 5.4 吋 | correct | NRDUO |
| 12 | 18 Pro / Pro Max HK: 雙 SIM 卡 (nano-SIM 及 eSIM) | correct | SPEC18 |
| 13 | iPhone Duo is eSIM-only worldwide (「全球一致僅支援 eSIM」) | correct | DUO; NRDUO |
| 14 | 18 Pro / Pro Max 鋁金屬一體式設計; iPhone Duo titanium | correct | SPEC18; NRDUO ("polished titanium") |
| 15 | iPhone Duo currently online purchase only on Apple HK (「現只供網上購買」) | correct as of 2026-11-26 | DUO |
| 16 | Official HK prices: 18 Pro HK$10,499 / 12,299 / 15,799 / 20,999; 18 Pro Max HK$11,499 / 13,299 / 16,799 / 21,999 (256GB/512GB/1TB/2TB) | correct, checked 2026-11-26; "from" prices match newsroom | BUY18; NR18 |
| 17 | iPhone Duo HK prices HK$17,499 / 19,299 / 22,799 / 27,999 | correct, checked 2026-11-26; HK$17,499 起 matches newsroom | BUYDUO; NRDUO |
| 18 | Sentence telling readers official prices may change, check Apple | included | — |
| 19 | iPhone Duo battery health page shows data for two batteries; the two may have different manufacture dates | correct | BATT |
| 20 | Battery path 「設定」>「電池」>「電池健康度」 with 循環使用次數 (iPhone 15 and later) | correct (brief wording) | docs/content-brief.md; BATT |
| 21 | 「設定」>「一般」>「關於本機」 shows model name and capacity | correct (general iOS) | docs/content-brief.md (關於本機 path) |
| 22 | 「快速開始」 transfers data to a new iPhone | correct | QS |
| 23 | Erase path and 「Apple 帳户（前稱 Apple ID）」 wording | correct (brief wording) | docs/content-brief.md |
| 24 | Apple one-year limited warranty runs from original retail purchase date | correct | WARR (as logged in docs/fact-check/sealed-new-iphone-recycle-price.md #8) |
| 25 | Apple offers trade-in credit when upgrading to iPhone 18 Pro (no amounts quoted) | correct; amounts deliberately omitted per brief | NR18 |
| 26 | Apple Trade In: credit or Apple Store 禮品卡, no cash; free recycling for ineligible devices; online takes about 2–3 weeks; valuation by model, year, configuration, condition | correct | docs/fact-check/apple-trade-in-hong-kong.md (#2, #3, #7, #14, #21; https://www.apple.com/hk/trade-in/) |
| 27 | New-launch prices volatile: early supply shortage, sealed premium can be above or below retail, narrows after restock; overseas demand | correct (general, hedged with 一般/可能) | docs/fact-check/sealed-new-iphone-recycle-price.md #1–#3 (unwire.hk 2025-10-10; hk01) |
| 28 | Larger capacities in some generations carry a higher premium due to scarcer supply | correct (general) | docs/fact-check/sealed-new-iphone-recycle-price.md #10 |
| 29 | Some regional versions are eSIM-only | correct (general; same claim in pillar) | docs/fact-check/iphone-recycle-price-trend.md |
| 30 | PRICES: iPhone 17 / 16 / 15 series placeholders, all non-null variants; 18 Pro / Pro Max show 查詢報價 (null) | consistent | src/data/prices.json |
| 31 | Own service: online quote, MTR or agreed place, 5–10 min check, cash or FPS | consistent with site | docs/content-brief.md |

Could not verify / left out: no authoritative data on iPhone 18 resale prices or which colour or capacity is most in demand, so the post names no "popular" colour and gives no premium figures. Apple's Trade In amounts in the newsroom (HK$ range) were deliberately not used.
