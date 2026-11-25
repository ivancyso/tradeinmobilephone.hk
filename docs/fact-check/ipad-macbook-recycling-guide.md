# Fact-check: ipad-macbook-recycling-guide

Checked 2026-11-25, `updatedAt` set to 2026-11-26. Price figures come from the owner (`src/data/prices.json`) and were not checked. Claims comparing prices were checked against prices.json.

| # | Claim (where) | Verdict | Source |
|---|---|---|---|
| 1 | "Apple ID" / 「Apple 帳戶」 naming | **corrected**: first mention (summary) is now 「Apple 帳户（前稱 Apple ID）」, and 「Apple 帳户」 is used after that in the body and FAQs | coordinator-verified support.apple.com/en-mo/HT201355 ; https://support.apple.com/zh-hk/102664 (「Apple 帳户 (或 Apple ID)」) |
| 2 | PRICE: Cellular fetches more than Wi-Fi | correct: every Cellular variant in prices.json is above the Wi-Fi variant of the same model and storage. Wording now cites the price table; removed "二手需求較穩定" (unverifiable) | src/data/prices.json |
| 3 | PRICE: "Pro holds value better than Air, mini and the standard iPad from the same year" | reframed: Pro has the highest price and the standard iPad the lowest | src/data/prices.json |
| 4 | PRICE: "older A-series models drop faster"; series table puts mini at "中" | **corrected**: iPad mini 6 (A15) 64GB Wi-Fi is close to or above iPad Air 5 (M1) 64GB Wi-Fi, so mini is now "中至較高". Removed "貨源較少" (unverifiable) | src/data/prices.json |
| 5 | PRICE: "the storage price gap narrows with model age" | **removed**: the data does not support it (e.g. the Pro 11 gaps are M2 +800, M1 +1300, 2020 +800). Now reads "the gap varies by model" | src/data/prices.json |
| 6 | Chip names: Pro 12.9 6th gen M2, 11 4th gen M2, 12.9 5th gen M1, 11 3rd gen M1, 2020 models; Air 5 M1; mini 6; mini 5; iPad 10/9/8; Pro 13 M4, Air 11 M3, mini 7 | correct | https://support.apple.com/zh-hk/117759 (model naming); general Apple specs |
| 7 | "iPad settings don't always show battery health" | **made specific**: only iPad Pro (M4, M5), iPad Air (M2, M3, M4), iPad mini (A17 Pro, A20 Pro) and iPad (A16) show it, under 設定 > 電池 > 電池健康度 | https://support.apple.com/zh-hk/117759 |
| 8 | Apple Pencil generations each support specific iPads | correct; added 1st gen | general Apple compatibility |
| 9 | iPad Pro has ProMotion | correct | general |
| 10 | Bending "common in thin large iPad Pro" | softened | — |
| 11 | New iPads aren't launched on a fixed September schedule | correct | general |
| 12 | iPad sign-out path | corrected wording: 「設定」>［你的姓名］> 登出 | https://support.apple.com/zh-hk/109511 |
| 13 | iPad erase path 「傳送或重置 iPad」>「抹掉所有內容和設定」 | **corrected** to HK wording: 「設定」>「一般」>「轉移或重設 iPad」>「清除所有內容和設定」 | https://support.apple.com/zh-hk/109511 |
| 14 | eSIM can be removed during the erase | correct, reworded to "erase the device and the eSIM profile" | https://support.apple.com/zh-hk/109511 |
| 15 | MDM / 遠端管理 devices must be released by the organisation | correct (general) | — |
| 16 | Apple Trade In "generally used to offset new products" | **corrected**: credit toward a purchase or an Apple Store Gift Card, no cash | https://www.apple.com/hk/shop/trade-in |
| 17 | Apple moved MacBooks to M-series from 2020 | correct | general |
| 18 | PRICE: Apple silicon is "明顯/遠高於" (clearly or far above) Intel | **softened**: MBP 13 Intel 2020 with 16/512 is somewhat below the M1 with 8/256, not far below. Now reads "一般高於" and the example says the M1 is still higher despite the Intel machine's larger RAM and SSD | src/data/prices.json |
| 19 | PRICE: higher RAM or SSD means a higher price (FAQ) | softened to "一般": MBP 13 Intel 2020 16 GB/1TB is priced below 16 GB/512 GB in prices.json | src/data/prices.json |
| 20 | PRICE: M4 Pro > M4; MBA M3 16 GB > 8 GB | correct | src/data/prices.json |
| 21 | PRICE: 16" MBP > 14", 15" MBA > 13" for the same chip | correct (every pair checked) | src/data/prices.json |
| 22 | RAM and SSD generally not user-upgradeable | correct | general |
| 23 | Cycle count path 「系統資訊」>「硬件」>「電源」 | **corrected** to the HK wording: hold Option, Apple menu >「系統資料」> sidebar「電源」 | https://support.apple.com/zh-hk/102888 |
| 24 | Battery condition in 系統設定 > 電池 | correct | https://support.apple.com/zh-hk/102888 (related) |
| 25 | Anti-reflective coating delamination on some older MacBooks | correct, specified older Retina models | https://www.macrumors.com/2015/10/17/apple-mbp-ar-coating-quality-program-staingate/ |
| 26 | Butterfly keyboard on "2016–2019 Intel models" | **corrected**: 2015–2019 (12" MacBook 2015–2017, MBA 2018–2019, 13"/15" MBP 2016–2019). 16" MBP 2019 and 2020 models use a scissor keyboard | https://www.macrumors.com/2019/05/21/2018-macbook-pro-air-keyboard-repair-program ; https://www.macrumors.com/2024/11/19/apple-ends-mac-butterfly-keyboard-service-program/ |
| 27 | "Intel Macs will gradually stop getting new macOS" | **made specific**: macOS Tahoe 26 is the last major release for Intel Macs. Only the 16" MBP 2019 and the 13" MBP 2020 with four Thunderbolt 3 ports among Intel MacBooks support it; no Intel MacBook Air does | https://support.apple.com/en-mz/122867 ; https://sixcolors.com/post/2025/06/macos-tahoe-is-the-last-release-to-support-intel/ |
| 28 | Firmware password: Intel only; turn it off in recovery | correct; clarified that Apple silicon doesn't use it, and that it is turned off from the Utilities menu in macOS Recovery | https://support.apple.com/102384 |
| 29 | "Intel MacBooks are more prone to battery swelling" | softened: any old MacBook can swell; Intel units are usually older | — |
| 30 | Erase All Content and Settings on "Apple silicon and *some* T2 Intel Macs (Monterey+)", path 「傳送或重置」 | **corrected**: all Apple silicon or T2 Macs running macOS Monterey 12+; HK wording 「系統設定」>「一般」>「轉移或重設」>「清除所有內容和設定」; on Monterey it is in the System Preferences menu | https://support.apple.com/zh-hk/102664 |
| 31 | Other Intel Macs: erase in recovery with Disk Utility and reinstall | correct, HK wording 「macOS 還原」, and added: press Command-Q after reinstalling | https://support.apple.com/zh-hk/102773 |
| 32 | Deauthorise computer in the Music app | **corrected**: only needed in iTunes on macOS Mojave or earlier; sign out of iMessage | https://support.apple.com/zh-hk/102773 |
| 33 | Time Machine at 系統設定 > 一般 > Time Machine; sign out at 系統設定 > [name] | correct (Ventura+) | general Apple UI |
| 34 | Activation Lock on Apple silicon and T2 Macs | correct, added macOS Catalina 10.15+ | https://support.apple.com/zh-hk/102541 |
| 35 | Own service claims (quote, MTR handover, 5–10 min, cash/FPS) | consistent | src/components/Steps.astro |
| 36 | Coordinator zh-HK wording check: erase 「設定」>「一般」>「轉移或重設 iPad」>「清除所有內容和設定」; battery 「設定」>「電池」>「電池健康度」; sign-out 「設定」> [你的姓名] >「登出」; macOS 「系統設定」>「一般」>「轉移或重設」>「清除所有內容和設定」 | correct: all paths in the post match. Parts history (「零件與維修記錄」) is not mentioned in this post | https://support.apple.com/zh-hk/109511 ; https://support.apple.com/zh-hk/101575 ; https://support.apple.com/zh-hk/102664 |

Claims checked: 36. Not externally verified, so worded generally: the HK Chinese name of the Startup Security Utility (described rather than named), and "Apple Pencil compatibility affects buyer acceptance" (general).
