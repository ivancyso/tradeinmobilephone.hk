# Fact-check: iphone-17-series-recycle-price

Checked 2026-11-26. Our recycling prices appear only as placeholders from `src/data/prices.json` (all non-null iPhone 17 / Air / 17 Pro / 17 Pro Max variants). Official Apple prices are typed as HK$ with sources below. No Apple Trade In amounts are quoted.

Sources:
- NR17 = https://www.apple.com/hk/en/newsroom/2025/09/apple-introduces-iphone-17/
- NRAIR = https://www.apple.com/hk/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/
- NRPRO = https://www.apple.com/hk/en/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max-the-most-powerful-and-advanced-pro-models-ever/
- S17 = https://www.apple.com/hk/iphone-17/specs/
- SAIR = https://www.apple.com/hk/iphone-air/specs/
- SPRO = https://support.apple.com/zh-hk/125090 (iPhone 17 Pro 技術規格)
- SPROMAX = https://support.apple.com/zh-hk/125091 (iPhone 17 Pro Max 技術規格)
- BUY17 = https://www.apple.com/hk/shop/buy-iphone/iphone-17
- BUYAIR = https://www.apple.com/hk/shop/buy-iphone/iphone-air
- LINEUP = https://www.apple.com/hk/iphone/
- NR17E = https://www.apple.com/hk/newsroom/2026/03/apple-introduces-iphone-17e/
- NR18 = https://www.apple.com/hk/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/
- BUY18 = https://www.apple.com/hk/shop/buy-iphone/iphone-18-pro
- SELL = https://support.apple.com/zh-hk/109511
- QS = https://support.apple.com/zh-hk/102659

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | All four models launched September 2025; HK on sale Friday 19 September 2025 | correct | NRAIR (「香港時間 9 月 19 日 (星期五) 起開始發售」); NR17; NRPRO |
| 2 | iPhone 17: A19, 256GB/512GB, 6.3 吋, 鋁金屬設計, nano-SIM 及 eSIM (HK) | correct | S17; NR17 |
| 3 | iPhone Air: A19 Pro, 256GB/512GB/1TB, 6.5 吋, 鈦金屬設計, eSIM only (不兼容實體 SIM 卡), about 5.6 mm (5.64 mm) | correct | SAIR; NRAIR |
| 4 | Apple says the eSIM-only design saves internal space for the thin body | correct | NRAIR |
| 5 | iPhone 17 Pro: A19 Pro, 256GB/512GB/1TB, 6.3 吋, 鋁金屬一體式設計, nano-SIM 及 eSIM | correct | SPRO; NRPRO |
| 6 | iPhone 17 Pro Max: A19 Pro, 256GB–2TB, 6.9 吋, 鋁金屬一體式設計, nano-SIM 及 eSIM | correct | SPROMAX; NRPRO |
| 7 | iPhone 17 Pro Max is the first iPhone with 2TB | correct ("for the first time, 2TB") | NRPRO |
| 8 | Pro models have three 48MP Fusion cameras | correct | NRPRO; SPRO (「4800 萬像素 Pro 融合相機系統」) |
| 9 | Launch HK prices from: iPhone 17 HK$6,899; Air HK$8,599; 17 Pro HK$9,399; 17 Pro Max HK$10,199 | correct | NR17; NRAIR; NRPRO |
| 10 | Current Apple HK prices (2026-11-26): iPhone 17 from HK$7,799; iPhone Air from HK$9,499 (higher than launch) | correct, read from the live store pages; a news report (unwire.hk 2026-09-10, iphone-duo-price-hike-hk) describes the same increase | BUY17; BUYAIR |
| 11 | Apple HK no longer lists iPhone 17 Pro / Pro Max as new; replaced by iPhone 18 Pro / Pro Max | correct: not in LINEUP; apple.com/hk/iphone-17-pro/specs/ redirects to the iPhone page | LINEUP |
| 12 | iPhone 18 Pro / Pro Max launched September 2026 | correct | NR18 |
| 13 | iPhone 18 Pro Max 256GB HK$11,499 | correct (checked 2026-11-26) | BUY18; NR18 |
| 14 | iPhone 17e launched March 2026 (HK sale 11 March), not in prices.json | correct | NR17E; src/data/prices.json |
| 15 | Apple usually launches new iPhones each September; older models' recycling prices usually fall after; no fixed percentage | correct (general; brief allows) | NR18; docs/fact-check/iphone-recycle-price-trend.md |
| 16 | Erasing a device with eSIM: when asked, choose to erase the device and eSIM profile; contact carrier to transfer service | correct | SELL |
| 17 | 「快速開始」 to transfer data | correct | QS |
| 18 | Battery, parts history, sign-out and erase menu paths | correct (brief wording) | docs/content-brief.md |
| 19 | Battery deductions (90%+ full; 85–89% about 5%; 80–84% about 10%; below 80% about 15%) and condition multipliers (0.92 / 0.8 / 0.5) | site's own estimation rules, same as pillar | src/content/guides/iphone-recycle-price-trend.json |
| 20 | PRICES: Pro Max highest at each capacity; Air equals iPhone 17 at 256GB and 512GB; Air 1TB above Air 512GB; 17 Pro 1TB close to 17 Pro Max 256GB; 2TB Pro Max is the highest 17-series price | consistent with prices.json on 2026-11-26 (17 Pro 1TB and 17 Pro Max 256GB are close; stated as 相差不大). Statements are dated 「按 {{date}} 價格表」 | src/data/prices.json |
| 21 | Some overseas versions are eSIM-only | correct (general; same claim as the pillar) | docs/fact-check/iphone-recycle-price-trend.md |
| 22 | Own service: quote, MTR handover, 5–10 min check, cash or FPS | consistent | docs/content-brief.md |

Could not verify / left out: no source on how much iPhone 17-series prices fell after the iPhone 18 launch, so no percentages are given. The effect of eSIM-only on Air resale is written as a general tendency.
