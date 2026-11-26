# Fact-check log: second-hand-iphone-price-guide

Checked 2026-11-25. Prices come from `src/data/prices.json` and were not checked. Business claims are the owner's own.

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Second-hand retail is "一般約" 1.2–1.3 × the recycling price (summary, FAQ, intro, H2, judgement bullets) | softened: now explicitly a rough estimate from this article ("推算，不是市場統計"). No market data supports it as a statistic | No source (brief bans invented statistics) |
| 2 | More than 50% above recycling price is expensive | softened: now "明顯高於估算範圍（例如…）" | No source |
| 3 | Private sellers fall between recycling and shop prices | softened: "一般會低於店舖二手價，但仍應高於回收價" | General reasoning |
| 4 | Apple releases new iPhones each September; supply rises and prices fall afterwards | correct (well-known; prices framed with 一般/通常) | https://www.apple.com/hk/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max |
| 5 | Apple provides many years of iOS updates; newer models last longer | softened: Apple publishes no fixed support period per model | No official fixed period found |
| 6 | Pro models have a telephoto lens | correct; added that standard models have no dedicated telephoto lens | https://www.apple.com/hk/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max |
| 7 | iPhone 15 series switched to USB-C | correct; added that iPhone 14 and earlier use Lightning | https://www.apple.com/hk/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/ |
| 8 | Model recommendations (16 Pro/Pro Max, 15 Pro Max/16, 15/14, 13/13 mini) | correct; all are real models in prices.json and the USB-C note is accurate | src/data/prices.json |
| 9 | Larger storage sells and recycles for more | consistent with prices.json ("通常") | src/data/prices.json |
| 10 | Samsung/Android second-hand prices usually fall faster than iPhone | kept with "一般"; consistent with prices.json (S24 Ultra 256GB recycles well below iPhone 16 Pro Max 256GB, same launch year) | src/data/prices.json |
| 11 | Battery health path 「設定」>「電池」>「電池健康度」 | correct. The vague 「維修」 hint was replaced with Apple's actual messages ("電池效能已顯著降低" service recommendation, 「無法驗證」) | https://support.apple.com/zh-hk/101575 |
| 12 | 「零件與服務紀錄」 and 「未知部件」 | corrected: Apple HK uses 「零件與維修記錄」 and the label 「未知」. The section only appears on repaired iPhones (iOS 15.2+), and the parts shown depend on the model | https://support.apple.com/zh-hk/102658 |
| 13 | Activation Lock: if setup asks for the previous owner's Apple ID, don't buy | correct and expanded per Apple: a passcode screen or Home Screen means the phone is not erased; 「iPhone 已為擁有者鎖定」 means it is locked; only the Hello screen is OK | https://support.apple.com/zh-hk/108794 |
| 14 | Network lock: test with your own SIM | correct, but added a caveat: iPhone Air (including the HK model) has no SIM tray and is eSIM-only; US iPhone 14 and later are eSIM-only | https://www.apple.com/hk/shop/buy-iphone/iphone-air ; https://www.apple.com/iphone-14/ |
| 15 | Serial number and IMEI in 「關於本機」 | correct | https://support.apple.com/zh-hk/108037 |
| 16 | Software update path 「設定」>「一般」>「軟件更新」 | correct | https://support.apple.com/zh-hk/118575 |
| 17 | 水貨 warranty "depends on region and Apple policy" | corrected (more specific): Apple's warranty says it may restrict iPhone warranty service to the country where the device was originally sold, so a 水貨 phone may not get warranty service in HK | https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-english.html |
| 18 | 水貨 SIM support and camera shutter sound may differ | correct, made specific: US iPhone 14+ have no SIM tray; Japan and Korea models have a mandatory shutter sound. Whether it can be turned off in HK varies, so test before buying | https://www.apple.com/iphone-14/ ; https://mrmad.com.tw/iphone-shut-down-camera-shutter-sound (secondary) |
| 19 | Check the region using the model number in 「關於本機」 | correct | https://support.apple.com/zh-hk/108044 |
| 20 | Check warranty and AppleCare+ by serial number on Apple's site ("查詢保固範圍") | corrected: "查詢保固範圍" is Taiwan wording, now "Apple 官方的保養查詢網頁" | https://checkcoverage.apple.com/hk/zh |
| 21 | Warranty "跟機不跟人" | removed or softened: the warranty runs 1 year from the original retail purchase and proof of purchase may be required. Whether it transfers to a second owner, and AppleCare+ transfer, is left to Apple's terms | https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-english.html |
| 22 | A third-party battery may show as an unknown part and affect resale | corrected wording: 「未知」 in 「零件與維修記錄」; battery health may show 「無法驗證」 | https://support.apple.com/zh-hk/102658 ; https://support.apple.com/zh-hk/101575 |
| 23 | Official battery replacement price depends on model and AppleCare+; check Apple's site | correct (no figures quoted) | https://support.apple.com/zh-hk/101575 |
| 24 | Reset path 「設定」>「一般」>「移轉或重置 iPhone」>「清除所有內容和設定」 | corrected: Apple HK uses 「轉移或重設 iPhone」 | https://support.apple.com/zh-hk/109511 |
| 25 | "Apple ID" | corrected: first mention 「Apple 帳户（前稱 Apple ID）」, then 「Apple 帳户」 | https://support.apple.com/zh-hk/109511 |
| 26 | Platform scams: fake low prices with a deposit request; insist on meeting in person and inspecting before paying | correct as advice; consistent with ADCC warnings on Carousell scams | https://www.hk01.com/突發/1085412/carousell騙案3月內330宗-釣魚連結套資料盜存款-會計師失-90萬 |
| 27 | Carrier-locked foreign versions | correct (general) | general knowledge, US carrier-locked units |
| 28 | Selling: online quote, MTR handover, 5–10 min inspection, cash/FPS | owner claim, consistent | src/components/Steps.astro |


## Correction (main session, 2026-11-26)

| Claim | Verdict | Source |
|---|---|---|
| Setup screen after erase / unlocked device is 「你好」 | corrected → 「哈囉」 (Apple zh-HK: 「當你看到「哈囉」畫面，即表示裝置可供你使用。」) | https://support.apple.com/zh-hk/108794 |


## Update (main session, 2026-11-26)

| Claim | Verdict | Source |
|---|---|---|
| Whether AppleCare+ passes to a second owner left to Apple's terms | corrected → one-time permanent transfer allowed under HK terms; seller hands over proof of purchase and plan confirmation and notifies AppleCare Administration in writing | https://www.apple.com/legal/sales-support/applecare/applecareplus/2610/261028_applecareplus_hk.pdf (v1.8) |
