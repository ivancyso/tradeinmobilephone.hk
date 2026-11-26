# Fact-check log: iphone-battery-replacement-price

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json, all variants used are non-null). Deduction percentages are the site's own estimate (src/components/QuoteForm.astro: battery 90%+ ×1, 85–89% ×0.95, 80–84% ×0.9, <80% ×0.85), not external facts.

Sources:
- BATPAGE = https://support.apple.com/zh-hk/iphone/repair/battery-replacement (「iPhone 電池的 Apple 服務與維修」). Fees load in a JS pricing widget; read in a rendered browser on 2026-11-26, both tabs: 「維修選擇」 (out of warranty) and 「AppleCare 維修選擇」
- GENBAT = https://support.apple.com/zh-hk/103269 (關於 iPhone 原廠電池, 發佈日期 2026-10-29)
- PARTS = https://support.apple.com/zh-hk/102658 (iPhone 零件和維修記錄, 發佈日期 2026-10-29)
- B11 = https://support.apple.com/zh-hk/106348 (battery menu paths, see iphone-battery-health-recycle-price log)
- MAIL = https://support.apple.com/zh-hk/109508 (將 iPhone 寄給 Apple 維修, 發佈日期 2026-10-26)
- SHIP18 = https://support.apple.com/zh-hk/127108 (將 iPhone 18 Pro Max 寄給 Apple, 發佈日期 2026-11-03)
- REPAIR = https://support.apple.com/zh-hk/repair
- SSR = https://support.apple.com/en-us/self-service-repair (region selector)

## Official out-of-warranty battery fees (BATPAGE, 「電池維修」, checked 2026-11-26)

| Model | Fee |
|---|---|
| iPhone Duo | HK$1,749 |
| iPhone 18 Pro Max, 18 Pro | HK$999 |
| iPhone Air, 17 Pro Max, 17 Pro, 16 Pro Max, 16 Pro | HK$928 |
| iPhone 17, 17e, 16 Plus, 16, 16e, 15 Pro Max, 15 Pro, 15 Plus, 15, 14 Pro Max, 14 Pro, 14 Plus, 14 | HK$779 |
| iPhone 13 Pro Max, 13 Pro, 13, 13 mini, 12 Pro Max, 12 Pro, 12, 12 mini, 11 | HK$709 |
| iPhone SE (第 3 代), SE (第 2 代) | HK$549 |

AppleCare tab: 「電池維修 HK$0」 for every model checked (18 Pro/Pro Max, 17 Pro/Pro Max, 16/16 Plus/16e/16 Pro/16 Pro Max, 15/15 Plus/15 Pro/15 Pro Max, 13 Pro/13 Pro Max, iPhone Duo).

Note: the widget's 「iPhone 11」 group only listed iPhone 11 (no 11 Pro / 11 Pro Max), and the 「iPhone XR」 group returned no model, so those are not in the post.

## Claims

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Out-of-warranty fees HK$549 (SE) to HK$999 (18 Pro series), table by model group | verified (Duo HK$1,749 listed separately) | BATPAGE |
| 2 | Fees are estimates; Apple inspects to set final fee; shipping may be added; authorised centres can set their own fees and estimates | verified (page also says 「並需要另繳增值稅」; not repeated, HK has no VAT) | BATPAGE |
| 3 | AppleCare+: free battery replacement if capacity below 80% (HK$0) | verified (「如果電池容量降至 80% 以下，我們會免費為你更換電池。」) | BATPAGE (AppleCare tab) |
| 4 | Limited warranty: 1 year, manufacturing issues; excludes accidental damage and batteries worn by normal use | verified | BATPAGE (FAQ) |
| 5 | Warranty status can be checked; signing in shows warranty and plan benefits | verified (「你可在此查看保養狀態」; 「登入即可查看你的保養和計劃權益」) | BATPAGE |
| 6 | AppleCare+ 80%+ "一般不符合免費更換條件，可向 Apple 查詢" | inference from the 80% rule, worded softly | BATPAGE |
| 7 | Battery menu paths (iPhone 15+ iOS 17.4+ 電池健康度; 11–14 電池健康與充電) | verified | B11; content brief |
| 8 | In-person at Apple Store (Genius Bar) or Apple 授權維修中心 | verified. Apple HK term is 「Apple 授權維修中心」, used instead of 「授權服務供應商」 | BATPAGE; REPAIR; GENBAT |
| 9 | Mail-in exists in HK guidance but 「並非所有國家或地區均提供郵寄維修服務」 | verified | MAIL |
| 10 | Mail-in: discharge to 25% or below then power off; do not ship if gas/odour or swelling separates the enclosure; contact Apple Support or visit Apple Store / 授權維修中心 instead | verified | SHIP18 (model-specific page; same conditions in zh-mo version) |
| 11 | Booking via 「開始取得支援」 on Apple support page | verified (button on BATPAGE) | BATPAGE |
| 12 | Repair status via 「我的支援」 or 「Apple 支援」 app with Apple 帳户 | verified | BATPAGE |
| 13 | Apple publishes no fixed turnaround time | verified by absence (no time on BATPAGE, REPAIR, MAIL); stated generally | BATPAGE; REPAIR |
| 14 | Repairs and parts have 90-day warranty or remaining Apple warranty, whichever longer | verified | BATPAGE |
| 15 | Genuine battery reports charge level and battery health; only trained technicians should replace | verified | GENBAT |
| 16 | 原廠 / 已使用 (iPhone 15+ with iOS 18) / 未知 labels and reasons for 未知 | verified | GENBAT |
| 17 | Parts history at 「設定」>「一般」>「關於本機」>「零件與維修記錄」, iPhone XR/XS and later for battery | verified (brief wording used; Apple page also writes 「零件和維修記錄」) | GENBAT; PARTS |
| 18 | 「未知」 parts may affect trade-in value | verified (「可能會影響裝置的換購價值」) | GENBAT; PARTS |
| 19 | Self Service Repair not available in HK; region list US, Canada, UK, India, European countries | verified via the page's region selector (no Hong Kong). Program buys parts and rents tools: general knowledge of the programme | SSR |
| 20 | New battery "最大容量" back near 100% | general (Apple: new batteries near 100%) | https://support.apple.com/zh-hk/101575 |
| 21 | Mail-in prep step 1 is backup, confirm iCloud sync | verified | MAIL |
| 22 | Worked examples: diff = price × 0.15 (<80%) and × 0.1 (80–84%) | site estimate, placeholders | QuoteForm.astro; prices.json |
| 23 | Verdicts (iPhone 13 / 15 Pro Max / 16 Pro Max not worth; 17 Pro Max 256GB about break-even; 2TB slightly above) | correct at 2026-11-26 prices: ×0.15 = 200 vs 709; 600 vs 779; 700 vs 928; 1,000 vs 928; 1,300 vs 928. Re-check if prices or fees change | prices.json; BATPAGE |
