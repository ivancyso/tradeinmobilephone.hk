# Fact-check log: iphone-recycle-price-trend

Checked 2026-11-25/26. Prices themselves come from the owner and were not checked. Only claims *about* prices were tested against `src/data/prices.json` (snapshot updatedAt 2026-11-26) and `src/components/QuoteForm.astro`.

| # | Claim (original) | Verdict | Now says / note | Source |
|---|---|---|---|---|
| 1 | iPhone 17 Pro Max is the highest recycling price | softened | "本網站已有報價的 iPhone 之中…最高". iPhone 18 Pro/Pro Max exist but are null (查詢報價) | src/data/prices.json |
| 2 | Model/storage line-up (17 Pro Max to 2TB, Air 256GB–1TB, 17 from 256GB, 16 Pro from 128GB, 12 64GB, etc.) | correct | Matches prices.json variants. Air storage and eSIM-only confirmed | prices.json; https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/ |
| 3 | iPhone 18 series is 查詢報價 | corrected | Now names iPhone 18 Pro / 18 Pro Max, announced September 2026 | https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/ ; prices.json (null) |
| 4 | New iPhones launch every September | correct | Kept as "一般在每年 9 月". Added 17/Air (Sep 2025) and 18 Pro (Sep 2026) as examples | Newsroom URLs above |
| 5 | After September launch, older models drop "約一至兩成" within weeks (summary, FAQ, H2) | softened | No percentage. Now "通常會下調，實際幅度視乎型號及市場". This was an invented statistic and a single snapshot can't verify it | content-brief.md (no invented stats) |
| 6 | Timeline: 7–8月 stable / first 2–3 weeks / 1–2 months after | softened | Time windows removed, kept as general tendencies | — |
| 7 | "上一代 Pro Max 及 Pro 的跌幅通常最明顯" | softened | Now "舊型號價錢一般調整得最快". The original also contradicted claim 8 | — |
| 8 | Pro Max has the highest price in its year **and falls slowest** | corrected | First half holds (2025, 2024, 2023, 2022, 2021, 2020 at like-for-like storage). "Falls slowest" is false in the data: 17PM→16PM 256GB gap 1,900 vs 17→16 256GB gap 0. Now says Pro Max is highest but not necessarily slowest, with that example | prices.json |
| 9 | Year-to-year falls get milder after the first year | corrected | Reframed to what the snapshot shows: the Pro Max 256GB gap is largest between the newest two generations (1,900, then 800, 800, 600) | prices.json |
| 10 | Pro Max/Pro "實際使用成本" not necessarily higher; "Pro Max 通常較穩陣" | removed | Needs purchase prices and depreciation data the site doesn't have. Replaced with "compare yourself" guidance | — |
| 11 | Pro below Pro Max (17 Pro, 16 Pro 256GB) | correct | 5,800 < 6,700; 4,000 < 4,800 | prices.json |
| 12 | iPhone Air 256GB "相近" to iPhone 17 256GB | corrected | Now "相同" (both 4,200) | prices.json |
| 13 | iPhone 16e lower than "同年其他型號" | corrected | 16e is year 2025 in data. Now "低於 iPhone 16 系列其他型號同容量" (128GB 2,800 vs 16 128GB 3,800) | prices.json |
| 14 | mini models "與同年標準版相若或略低" | corrected | 13 mini 128/256 is higher than 13 (1,400/1,600 vs 1,300/1,500), and 12 mini 128 is above 12 128. Now "相若，部分容量甚至略高", with placeholder example | prices.json |
| 15 | "同一型號容量越大，回收價越高" | corrected | False for iPhone 12: 64GB 1,100 > 128GB 800. Now "大多數情況下是…亦有例外" | prices.json |
| 16 | "Pro Max 及 Pro 高容量差距較大，舊款/標準版差距較細" | corrected | Inconsistent in data. Replaced with a concrete example: 14 Pro 512GB→1TB (+1,400) is bigger than 128GB→512GB (+500) | prices.json |
| 17 | 17 Pro Max 256GB→2TB gap much larger than 15 Pro 128GB→1TB | correct | 2,000 vs 600 | prices.json |
| 18 | Old 64/128GB "細容量價錢較接近" | corrected | Now states 12 64GB is actually higher than 128GB | prices.json |
| 19 | "最受歡迎的中間容量（256GB）最容易出手" | removed | Unverifiable market claim | — |
| 20 | Best time to sell is 7–8月 before launch | softened | Now "9 月發佈會之前出售較有利" | — |
| 21 | Battery deductions start below 85% (summary, sell-timing step) | corrected | Form deducts from 85–89% (×0.95). Now "跌穿 90% 之前" | src/components/QuoteForm.astro |
| 22 | Battery: 90%+ full / 85–89% −5% / <80% more | corrected | Added 80–84% −10% and <80% −15% to match the form | QuoteForm.astro |
| 23 | Condition table ×1 / ×0.92 / ×0.8 / ×0.5 | correct | Matches form | QuoteForm.astro |
| 24 | Sealed new iPhone priced at top condition | correct | Form gives 全新未開封 ×1, same as 95%+ | QuoteForm.astro |
| 25 | Before selling: back up, unpair Watch, sign out of Apple ID, erase | corrected | Uses 「Apple 帳户（前稱 Apple ID）」 and the zh-HK path 「設定」>「一般」>「轉移或重設 iPhone」>「清除所有內容和設定」 | https://support.apple.com/zh-hk/109511 |
| 26 | Find My on means Activation Lock, so the phone can't be recycled | correct | Kept, worded as 啟用鎖限制 | https://support.apple.com/zh-hk/109511 |
| 27 | 「零件與服務紀錄」 shows 「未知零件」 for non-genuine screen/battery/camera | corrected | Correct zh-HK label is 「零件與維修記錄」 (iOS 15.2+, only appears if repaired). The part label is 「未知」. Apple says unknown parts may affect trade-in value | https://support.apple.com/zh-hk/102658 |
| 28 | Model number in 設定 > 一般 > 關於本機 | correct | — | https://support.apple.com/zh-hk/108044 |
| 29 | Phones without a physical SIM slot "在本地需求較低" | softened | Now: some overseas versions are eSIM-only, most HK models keep nano-SIM, and iPhone Air is eSIM-only everywhere. Version may affect the quote | https://www.apple.com/hk/iphone/compare/ ; Air newsroom URL |
| 30 | Recycling shops pay "一般高於官方折抵"; Apple "一般較保守" (table, FAQ) | corrected | Unsupported: Apple HK's "最高達" values for several models exceed the site's 256GB prices. Now "沒有固定答案，建議比較". No Apple amounts quoted | https://www.apple.com/hk-zh/shop/browse/overlay/tradein_landing/iphone_values |
| 31 | Apple Trade In gives only purchase credit or gift card, no cash | correct | Wording now "購物折抵或 Apple Store 禮品卡" | https://www.apple.com/hk/trade-in/ |
| 32 | Apple gift card usable only in HK Apple channels | correct | Added to FAQ | https://www.apple.com/hk/shop/gift-cards (terms) |
| 33 | Apple Trade In: online or Apple Store; no-value devices recycled free | correct | Added online "2 至 3 星期" | https://www.apple.com/hk/trade-in/ |
| 34 | Market drivers (overseas demand, FX, iOS support, local supply) | softened | Kept as general tendencies ("部分", "一般") | — |
| 35 | Self-sale risks / timings | correct (general) | Generic, hedged | — |
| 36 | Site updates show date and ▲▼; inspection 5–10 min; MTR handover; cash/FPS | correct | Owner's claims, consistent with site | src/components/Steps.astro; src/pages/process.astro |

Coordinator-supplied facts applied: Apple 帳户 naming (support.apple.com/zh-hk/109511); erase path wording. No sentence generalises Apple's no-cash rule to all official programmes.
