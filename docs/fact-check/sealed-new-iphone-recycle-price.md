# Fact-check: sealed-new-iphone-recycle-price

Checked 2026-11-25, `updatedAt` set to 2026-11-26. Prices are placeholders from prices.json. No 炒價 figures are stated.

| # | Claim (where) | Verdict | Source |
|---|---|---|---|
| 1 | 炒價 is "highest in the first few days after launch and falls back within weeks to months" (summary, FAQ 2, intro, comparison table, H2 opener) | **corrected**: 炒價 follows supply and demand. It can rise after launch (iPhone 17: some Pro configs were below retail at launch, and high-capacity Pro Max rose about 3 weeks later) and can rebound months later | https://unwire.hk/2025/10/10/iphone17-resale-price/mobile-phone/ ; https://www.hk01.com/數碼生活/60277995/iphone-17先達回收炒價直擊-29-6-pro-max開始回暖-每日更新 |
| 2 | "After a few months most models are at or below retail" (timeline table, FAQ) | softened to "after official restocking the premium usually narrows; some models are at or below retail" | same as #1 |
| 3 | Reasons for 炒價: early official shortage, demand from other regions | correct (general), kept with 一般 | same as #1 (unwire: scarcity, HK SIM configuration demand) |
| 4 | Apple usually launches new iPhones each September | correct (well-known; brief allows) | https://www.apple.com.cn/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/ |
| 5 | iPhone 17 Pro Max launched September 2025 | correct | https://unwire.hk/2025/10/10/iphone17-resale-price/mobile-phone/ (on sale about 3 weeks before 10 Oct 2025) |
| 6 | "iPhone 17 Pro Max's 炒價 has largely disappeared" | **removed/corrected**: unverifiable (media reported a rebound in June 2026). Now says the 17 Pro Max is the previous generation because the iPhone 18 Pro and Pro Max launched in September 2026, and that pricing needs a live quote | https://www.apple.com.cn/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/ ; https://www.thestandard.com.hk/news/article/342456/iPhone-18-Pro-pre-orders-open-Saturday-as-retailers-weigh-resale-potential |
| 7 | iPhone 18 Pro Max is the newest model with no listed price | correct; added "launched September 2026"; prices.json has null prices | same as #6; src/data/prices.json |
| 8 | "Unactivated iPhones have a more complete warranty" | **corrected**: Apple's one-year limited warranty runs from the original retail purchase date, not activation, so a more recent purchase leaves more warranty; the receipt proves the date | https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-traditional-chinese.html ; https://support.apple.com/en-us/102865 |
| 9 | "Battery health guaranteed as new" | softened to "battery unused" | — |
| 10 | "Base capacity has the highest demand but also the most stock" | **corrected**: supply differs by capacity; in some generations high-capacity versions carry a higher premium (iPhone 17 Pro Max report) | https://unwire.hk/2025/10/10/iphone17-resale-price/mobile-phone/ |
| 11 | Pro / Pro Max premiums are usually larger than the standard model's | correct (general, 一般) | https://www.hk01.com/數碼生活/60277995/iphone-17先達回收炒價直擊-29-6-pro-max開始回暖-每日更新 (Pro Max outperforms Pro) |
| 12 | Colour premiums are higher early and narrow as supply grows | correct (general) | https://unwire.hk/2025/10/10/iphone17-resale-price/mobile-phone/ (colour premiums narrowed as supply rose) |
| 13 | Regional versions differ in SIM design, which affects resale | correct (general) | same as #12 (HK SIM configuration preferred over dual-eSIM) |
| 14 | Definition of 全新未開封 (seal intact, never activated, receipt) | correct as the site's working definition (general, 一般而言) | business definition; no external source |
| 15 | Opened but not activated is priced between sealed and used; activated means priced as used | kept: business practice, consistent with the site | — |
| 16 | Reseal fraud: re-wrapped boxes, serial mismatch, problem sources | correct (general) | general |
| 17 | Problem source includes account lock | reworded: 「Apple 帳户（前稱 Apple ID）」 Activation Lock (first mention in the post) | coordinator-verified support.apple.com/en-mo/HT201355 ; https://support.apple.com/zh-hk/102664 |
| 18 | Check your own banking app for FPS, not a screenshot | correct (safety advice) | — |
| 19 | PRICE: sealed price usually above the used price; 17 Pro Max and 17 Pro / 17 used prices | consistent; placeholders only | src/data/prices.json |
| 20 | Own service: quote via contact, MTR handover, 5–10 min check, cash/FPS | consistent | src/components/Steps.astro |

Claims checked: 20. Could not verify: no authoritative source for a general 炒價 timeline exists, so all timeline statements are now hedged (一般 / 可升可跌).
