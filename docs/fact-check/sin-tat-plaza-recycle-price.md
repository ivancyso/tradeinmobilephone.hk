# Fact-check log: sin-tat-plaza-recycle-price

Checked 2026-11-25. Prices come from `src/data/prices.json` and were not checked. Business claims are the owner's own (Steps.astro, process.astro).

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | 先達廣場 is at 亞皆老街 83 號, 旺角 | correct; added the building name 先施大廈 (Sincere Building) | https://en.wikipedia.org/wiki/Sin_Tat_Plaza ; https://leasinghub.com/building/sin-tat-plaza/3130 |
| 2 | A few minutes' walk from 港鐵旺角站 | correct (a listing says about 2 minutes; kept as "數分鐘") | https://leasinghub.com/en/building/sin-tat-plaza/3130 |
| 3 | One of the malls with the highest concentration of phone shops in HK | correct (100+ phone shops; known as a phone-flipping hub) | https://www.hk01.com/地產樓市/286758/先達直擊-iphone失色-國產機借勢抬頭-過萬蚊華為月賣10部 ; https://www.stheadline.com/society/3384807/ |
| 4 | Shops sell new phones, 水貨, second-hand phones and accessories, and buy phones | corrected: "新機、二手機、配件及手機維修，不少亦收購舊機". 水貨 removed because no source states it | https://en.wikipedia.org/wiki/Sin_Tat_Plaza ; HK01 as #3 |
| 5 | (added) History: formerly a 先施百貨 property, split into small shops and sold in the mid-1990s, an early 「劏場」; queues at every new iPhone launch, with foot traffic now lower | added, sourced | https://www.hk01.com/地產樓市/286760/先達直擊-lo哥憶述元祖級劏場那些年-sunday電訊攪局造就商機 ; HK01 #3 ; https://www.stheadline.com/society/3384807/ |
| 6 | The same iPhone can differ by "幾百元" between shops | softened to "報價可以有明顯差距" (the figure was unverifiable) | No source |
| 7 | No unified price; each shop quotes independently based on stock, sales channel and condition | correct as general description (independent shops) | Wikipedia / HK01 as above |
| 8 | Apple releases new iPhones each September, and older models' recycling prices usually fall around then | correct (well-known; allowed by the brief) | https://www.apple.com/hk/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max |
| 9 | Weekdays are quieter, weekends busier; ask whether ID is needed | kept as general advice (not a factual claim) | n/a |
| 10 | Battery health path 「設定」>「電池」 | corrected to 「設定」>「電池」>「電池健康度」 | https://support.apple.com/zh-hk/101575 |
| 11 | Check for non-genuine parts in 「關於本機」 | corrected: 「零件與維修記錄」 appears only on repaired iPhones; non-genuine or unverifiable parts are labelled 「未知」 | https://support.apple.com/zh-hk/102658 |
| 12 | "Apple ID" | corrected: first mention 「Apple 帳户（前稱 Apple ID）」, then 「Apple 帳户」 (body and FAQ) | https://support.apple.com/zh-hk/109511 |
| 13 | Battery below 85% starts to noticeably affect price | corrected to match the site's estimator: deductions start below 90% and are largest below 80% | src/components/QuoteForm.astro (1 / 0.95 / 0.9 / 0.85) |
| 14 | Android/tablet quotes vary more than iPhone "because demand is more scattered" | softened: "可能比 iPhone 更大"; the unverified cause was removed | No source |
| 15 | Older models (e.g. iPhone 12) have lower prices and smaller gaps; Pro Max has bigger gaps | consistent with prices.json (iPhone 12 128GB far below Pro Max models) | src/data/prices.json |
| 16 | Example: a quote of about 0.8 × reference is clearly low | consistent with the placeholder-based example | src/data/prices.json |
| 17 | Online recycling: MTR or agreed place, 5–10 min inspection, cash/FPS | owner claim, consistent | src/components/Steps.astro |
