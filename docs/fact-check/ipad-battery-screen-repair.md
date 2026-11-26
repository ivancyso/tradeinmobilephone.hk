# Fact-check log: ipad-battery-screen-repair

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json; all variants used are non-null: ipad-pro-11-m2, ipad-mini-6, ipad-air-5, ipad-10, label "256GB Wi-Fi"). Deduction multipliers are the site's own estimate (src/components/QuoteForm.astro: battery 90%+ ×1, 85–89% ×0.95, 80–84% ×0.9, <80% ×0.85; condition 「有損壞／爆屏」 ×0.5), not external facts.

Sources:
- IPADREP = https://support.apple.com/zh-hk/ipad/repair (「iPad 的 Apple 服務與維修」). Fees load in a JS estimator; read in a rendered browser on 2026-11-26 for every model in both tabs (「維修選擇」 = out of warranty, 「AppleCare 維修選擇」), and six models re-read with longer waits to confirm the widget had updated
- AC = https://www.apple.com/hk/applecare/ (iPad tab of 服務計劃), read 2026-11-26
- BH = https://support.apple.com/zh-hk/117759 (如何查看 iPad 電池健康度和記錄, 發佈日期 2026-11-20)
- PREP = https://support.apple.com/zh-hk/109519 (準備好將 iPhone 或 iPad 送往預約維修, 發佈日期 2026-11-24)
- ERASE = https://support.apple.com/zh-hk/109511 ; HELLO = https://support.apple.com/zh-hk/108794

## Official out-of-warranty fees (IPADREP 「維修選擇」, checked 2026-11-26)

| Model | 電池維修 | 其他損壞 Wi-Fi | 其他損壞 Wi-Fi + 流動網絡 |
|---|---|---|---|
| iPad Pro 13 吋 (M5) | HK$1,549 | HK$8,949 | HK$9,349 |
| iPad Pro 11 吋 (M5) | HK$1,409 | HK$7,799 | HK$8,199 |
| iPad Pro 13 吋 (M4) | HK$1,549 | HK$8,599 | HK$8,999 |
| iPad Pro 11 吋 (M4) | HK$1,409 | HK$7,449 | HK$7,849 |
| iPad Pro 12.9 吋 (第 6 代) | HK$1,409 | HK$6,549 | HK$6,899 |
| iPad Pro 12.9 吋 (第 5 代) | HK$939 | HK$6,549 | HK$6,899 |
| iPad Pro 12.9 吋 (第 4 代) | HK$939 | HK$5,109 (single entry) | — |
| iPad Pro 11 吋 (第 4 代) | HK$1,169 | HK$4,949 | HK$5,349 |
| iPad Pro 11 吋 (第 3 代) | HK$939 | HK$4,949 | HK$5,349 |
| iPad Pro 11 吋 (第 2 代) / (第 1 代) | HK$939 | HK$3,929 (single entry) | — |
| iPad Air 13 吋 (M4) | HK$1,169 | HK$5,499 | HK$5,899 |
| iPad Air 11 吋 (M4) | HK$1,029 | HK$4,299 | HK$4,699 |
| iPad Air 13 吋 (M3) and (M2) | HK$1,169 | HK$5,349 | HK$5,749 |
| iPad Air 11 吋 (M3) and (M2) | HK$939 | HK$4,149 | HK$4,549 |
| iPad Air (第 5 代) | HK$939 | HK$3,949 | HK$4,249 |
| iPad Air (第 4 代) | HK$939 | HK$3,309 (single entry) | — |
| iPad mini (A20 Pro) | HK$939 | HK$4,049 | HK$4,299 |
| iPad mini (A17 Pro) | HK$939 | HK$3,349 | HK$3,599 |
| iPad mini (第 6 代) | HK$939 | HK$3,119 | HK$3,369 |
| iPad mini (第 5 代) | HK$939 | HK$2,349 (single entry) | — |
| iPad (A16) | HK$939 | HK$2,999 | HK$3,349 |
| iPad (第 10 代) | HK$939 | HK$2,749 | HK$3,119 |
| iPad (第 9 代) | HK$799 | HK$2,349 (single entry) | — |
| iPad (第 8 代), (第 7 代) | HK$799 | HK$1,949 (single entry) | — |

Older iPad Pro 12.9 (4th gen) and 11 (1st/2nd gen) are not in the post's table.

## AppleCare fees (IPADREP 「AppleCare 維修選擇」, checked 2026-11-26)

- iPad Pro (M4, M5), iPad Air 11/13 (M2, M3, M4), iPad mini (A17 Pro, A20 Pro), iPad (A16): 電池維修 HK$0, 螢幕損壞 HK$228, 其他意外損壞 HK$788
- iPad Pro 12.9 (4th–6th gen), iPad Pro 11 (1st–4th gen), iPad Air (4th, 5th), iPad mini (5th, 6th), iPad (7th–10th): 電池維修 HK$0, 其他意外損壞 HK$348 (no separate screen line)

## Claims

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Out-of-warranty iPad battery HK$799–HK$1,549, by model (table) | verified | IPADREP |
| 2 | 「其他損壞」 HK$1,949–HK$9,349 | verified (min iPad 7th/8th gen, max iPad Pro 13 M5 cellular) | IPADREP |
| 3 | The estimator has no separate out-of-warranty screen fee; 爆mon is generally estimated under 「其他損壞」 | inference: the out-of-warranty tab lists only 「電池維修」 and 「其他損壞」; worded 「一般」 and final fee set by inspection | IPADREP |
| 4 | Estimates only; Apple inspects to set final fee; shipping may be added; Apple 授權維修中心 can set own fees | verified (page also says 「並需要另繳增值稅」, not repeated) | IPADREP |
| 5 | Limited warranty: 1 year, manufacturing issues; excludes accidental damage and batteries worn by normal use | verified | IPADREP FAQ |
| 6 | In person at any Genius Bar or Apple 授權維修中心; 「開始使用」 to start; status in 「我的支援」 or 「Apple 支援」 app | verified | IPADREP |
| 7 | No fixed repair time published | verified by absence on IPADREP; stated generally | IPADREP |
| 8 | Repairs/parts: 90 days or remaining warranty, whichever longer; parts may be new or previously used genuine parts that passed testing | verified | IPADREP |
| 9 | AppleCare: 特快更換, replacement iPad sent without waiting for the old one | verified | IPADREP (AppleCare tab) |
| 10 | AppleCare+: free battery if capacity below 80% | verified (「如果電池容量降至 80% 以下，我們會免費為你更換電池」; AC: 「電池蓄電量低於原有的 80%」) | IPADREP; AC |
| 11 | AppleCare+ fees: screen HK$228 / other HK$788 (newer models), HK$348 (older models) | verified per model | IPADREP |
| 12 | AppleCare+ for iPad 2 年 HK$599 起 | verified | AC (iPad tab) |
| 13 | Covers one compatible Apple Pencil and one Apple iPad keyboard; accessory replacement 服務費 HK$228 | verified | AC |
| 14 | Buy with the device or within 60 days in the Settings app | verified | AC FAQ |
| 15 | Same repair fee at Apple and all 授權維修中心 for AppleCare-covered repairs | verified | IPADREP (AppleCare tab) |
| 16 | Battery 80%+ "一般不符合免費更換條件" | inference from the 80% rule, worded softly | IPADREP |
| 17 | Battery health visible only on iPad Pro (M4, M5), iPad Air (M2, M3, M4), iPad mini (A17 Pro, A20 Pro), iPad (A16), at 「設定」>「電池」>「電池健康度」; shows manufacture/first-use dates and cycle count | verified 2026-11-26 (same list as pillar log #7) | BH |
| 18 | All rechargeable batteries are consumables; one cycle = using 100% of capacity | verified | BH |
| 19 | Signs of a worn battery (short runtime, sudden drops, shutdowns, needing to stay plugged in); swelling → stop charging | general advice, not an Apple list | — |
| 20 | Prep: back up and confirm iCloud sync; remove Wallet cards/passes; iPadOS 27+ 「準備好維修或換購」 in 「尋找」 app, iPadOS 26 or earlier turn off 「尋找我的 iPad」 in 設定 > 姓名 > 尋找; can use another device / icloud.com/find | verified | PREP |
| 21 | Book Genius Bar before going; bring device, accessories, receipt if any, ID; device may be erased on return; turn Find My back on | verified | PREP |
| 22 | Never give Apple 帳户 or device passcode; Apple and 授權維修中心 won't ask | verified | PREP |
| 23 | Cracked glass may cut; use a protector or case | general safety | — |
| 24 | Erase path 「設定」>「一般」>「轉移或重設 iPad」>「清除所有內容和設定」; 「哈囉」 screen | verified (reused) | ERASE; HELLO; pillar log |
| 25 | Model names: iPad Pro 11"（第4代 M2） = Apple's 「iPad Pro 11 吋 (第 4 代)」; mini 6, Air 5, iPad 10 match the estimator names | correct | IPADREP; prices.json |
| 26 | Worked examples: gain = price × 0.15 (battery <80%), × 0.1 (80–84%), × 0.5 (damaged) | site estimate, placeholders | QuoteForm.astro; prices.json |
| 27 | Verdicts at 2026-11-26 prices: battery gain 600 (Pro 11 M2) vs HK$1,169; 400 (mini 6) / 300 (Air 5) / 300 (iPad 10) vs HK$939. Screen gain 2,000 vs HK$4,949; 1,200 vs HK$3,119; 1,000 vs HK$3,949; 900 vs HK$2,749. All below the fee; with AppleCare+ HK$348 < gain | correct at current prices. Re-check if prices or fees change | prices.json; IPADREP |
| 28 | Light scratches fall under the condition grades, not 「有損壞／爆屏」 | correct (quote form grades 95%/90%/80% 新) | QuoteForm.astro |
| 29 | Dead iPads can go via 四電一腦 (tablet is a regulated 電腦) | verified | https://weee.gov.hk/tc/background/regulatory-measures/ |
| 30 | Own service claims (MTR handover, on-the-spot inspection and payment) | consistent | src/components/Steps.astro |

Not stated: third-party iPad screen/battery repair risks (no Apple iPad-specific source checked), Apple turnaround times, mail-in availability for iPad in HK.
