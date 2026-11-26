# Fact-check log: iphone-cracked-screen-sell-or-repair

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json, all variants used are non-null). 「有損壞／爆屏」 ×0.5 and battery <80% ×0.85 are the site's own estimate (src/components/QuoteForm.astro), not external facts.

Sources:
- SCRPAGE = https://support.apple.com/zh-hk/iphone/repair/screen-replacement (「iPhone 螢幕的 Apple 服務與維修」); same fee widget as https://support.apple.com/zh-hk/iphone/repair/battery-replacement. Read in a rendered browser on 2026-11-26, tabs 「維修選擇」 and 「AppleCare 維修選擇」
- DISP = https://support.apple.com/zh-hk/103256 (關於 iPhone 原廠顯示器, 發佈日期 2026-10-29)
- PARTS = https://support.apple.com/zh-hk/102658 (iPhone 零件和維修記錄, 發佈日期 2026-10-29)
- SAFE = https://support.apple.com/zh-hk/guide/iphone/iph301fc905/ios (iPhone 重要安全資訊)
- GLASS = https://support.apple.com/zh-hk/104942 (iPhone broken glass safety, 發佈日期 2026-09-18)
- SHIP18 = https://support.apple.com/zh-hk/127108 (將 iPhone 18 Pro Max 寄給 Apple, 發佈日期 2026-11-03)
- ICB = https://support.apple.com/zh-hk/108366 (如何使用 iCloud 備份 iPhone 或 iPad, 發佈日期 2026-09-21)
- TRUST = https://support.apple.com/zh-hk/109054 (「信任這部電腦」提示訊息)
- MACBK = https://support.apple.com/en-hk/108796 (back up iPhone with Mac / Finder); Windows Apple 裝置 app / iTunes: https://support.apple.com/zh-mo/108392
- ERASE = https://support.apple.com/zh-hk/guide/icloud/mmfc0ef36f/icloud (在 iCloud.com 的「尋找裝置」清除裝置)
- PROC = src/pages/process.astro (inspection items)

## Official out-of-warranty screen fees (SCRPAGE, 「螢幕損壞」, checked 2026-11-26)

| Model | Screen | Back glass | Screen + back glass | Other |
|---|---|---|---|---|
| iPhone Duo | outer HK$3,249; inner HK$8,749 | HK$1,549 | outer + back HK$4,299 | HK$13,099 |
| 18 Pro Max | HK$3,249 | HK$1,249 | HK$3,949 | HK$7,519 |
| 18 Pro | HK$2,579 | HK$1,249 | HK$3,279 | HK$7,119 |
| Air | HK$2,579 | HK$1,249 | HK$3,279 | HK$6,249 |
| 17 Pro Max | HK$3,249 | HK$1,249 | HK$3,949 | HK$7,519 |
| 17 Pro | HK$2,579 | HK$1,249 | HK$3,279 | HK$7,119 |
| 17 | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,349 |
| 17e | HK$1,789 | HK$1,249 | HK$2,499 | HK$4,149 |
| 16 Pro Max | HK$3,249 | HK$1,249 | HK$3,949 | HK$6,549 |
| 16 Pro | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,899 |
| 16 Plus | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,249 |
| 16 | HK$2,139 | HK$1,249 | HK$2,849 | HK$4,899 |
| 16e | HK$1,789 | HK$1,249 | HK$2,499 | HK$4,049 |
| 15 Pro Max | HK$3,249 | HK$1,249 | HK$3,949 | HK$6,099 |
| 15 Pro | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,899 |
| 15 Plus | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,149 |
| 15 | HK$2,139 | HK$1,249 | HK$2,849 | HK$4,799 |
| 14 Pro Max | HK$3,249 | HK$4,649 | HK$5,099 | HK$5,899 |
| 14 Pro | HK$2,579 | HK$4,399 | HK$4,699 | HK$5,699 |
| 14 Plus | HK$2,579 | HK$1,249 | HK$3,279 | HK$5,149 |
| 14 | HK$2,139 | HK$1,249 | HK$2,849 | HK$4,549 |
| 13 Pro Max | HK$2,579 | HK$4,399 | HK$5,149 | HK$5,149 |
| 13 Pro | HK$2,139 | HK$3,899 | HK$4,549 | HK$4,549 |
| 13 | HK$2,139 | HK$3,049 | HK$3,849 | HK$3,849 |
| 13 mini | HK$1,769 | HK$2,699 | HK$3,499 | HK$3,499 |
| 12 Pro Max | HK$2,579 | HK$3,909 | HK$4,699 | HK$4,699 |
| 12 Pro | HK$2,139 | HK$3,439 | HK$4,079 | HK$4,079 |
| 12 | HK$2,139 | HK$2,679 | HK$3,479 | HK$3,479 |
| 12 mini | HK$1,769 | HK$2,309 | HK$3,129 | HK$3,129 |
| 11 | HK$1,569 | – | – | HK$3,129 |
| SE (第 3 代) | HK$1,029 | – | – | HK$2,599 |
| SE (第 2 代) | HK$1,029 | – | – | HK$2,089 |

AppleCare tab, all models checked (18 Pro/Pro Max, 17 Pro/Pro Max, 16 / 16 Plus / 16e / 16 Pro / 16 Pro Max, 15 / 15 Plus / 15 Pro / 15 Pro Max, 13 Pro / 13 Pro Max): 螢幕損壞 HK$228, 背面玻璃損壞 HK$228, 其他意外損壞 HK$788. iPhone Duo: 表層損壞 HK$149, 背面玻璃 HK$228, 外螢幕 HK$228, 內顯示器 HK$788, 其他意外損壞 HK$788.

## Claims

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Out-of-warranty screen fees HK$1,029 (SE) to HK$3,249 (Pro Max), table by model group; Duo outer HK$3,249 / inner HK$8,749 | verified | SCRPAGE |
| 2 | 17 Pro Max screen + back glass HK$3,949; combined fee is lower than the two separately | verified (e.g. 3,249 + 1,249 > 3,949; 14 Pro Max 3,249 + 4,649 > 5,099) | SCRPAGE |
| 3 | Back glass HK$1,249 for iPhone 15–18 and 14 / 14 Plus; 14 Pro Max HK$4,649, 14 Pro HK$4,399, 13 HK$3,049 | verified | SCRPAGE |
| 4 | Fees are estimates; final after inspection; shipping may be added; authorised centres set own fees | verified | SCRPAGE |
| 5 | AppleCare+ screen HK$228, back glass HK$228, other accidental damage HK$788; Duo inner display HK$788 | verified | SCRPAGE (AppleCare tab) |
| 6 | AppleCare+ unlimited repairs for drops and liquid spills | verified (「iPhone 可就摔落和液體潑濺獲得不限次數的維修」) | SCRPAGE / battery page AppleCare tab |
| 7 | Under AppleCare, Apple and all authorised centres charge the same fee | verified | SCRPAGE (AppleCare tab) |
| 8 | Limited warranty does not cover accidental damage | verified | SCRPAGE |
| 9 | 16 Pro comparison: screen HK$2,579, back glass HK$1,249, other HK$5,899 | verified | SCRPAGE |
| 10 | 90-day repair warranty or remaining warranty; Apple genuine parts | verified | SCRPAGE |
| 11 | Display parts history applies to iPhone 11 and later, excluding SE 2/3; path 設定 > 一般 > 關於本機 > 零件與維修記錄 | verified (brief wording; Apple page writes 「零件和維修記錄」) | DISP |
| 12 | Non-genuine display issues: Multi-Touch, call-time touches/display not turning off, 原色調, ambient light sensor, colour, brightness, battery drain | verified (True Tone = 「原色調」 in Apple HK) | DISP |
| 13 | 「未知」 parts may affect trade-in value | verified | DISP; PARTS |
| 14 | Face ID / Touch ID cannot be used until calibration of those parts completes | verified | PARTS |
| 15 | Third-party repair may not complete calibration, so test Face ID | softened inference; not claimed as Apple statement | PARTS |
| 16 | Do not use an iPhone with broken glass; stop use if battery suspected damaged; battery serviced only by trained technicians (overheating, fire, injury) | verified | SAFE |
| 17 | Do not remove chipped or cracked glass without protection | verified | GLASS |
| 18 | Swelling signs (screen lifted, body raised); do not ship with gas/odour or swelling separating enclosure; contact Apple Support or visit | verified for shipping conditions; swelling signs are general description | SHIP18 |
| 19 | Original draft: "用透明膠紙或保護貼封住裂痕" | removed (not in Apple zh-hk guidance) | – |
| 20 | iCloud backup path 設定 > [姓名] > iCloud > iCloud 備份 > 立即備份; auto backup when on power, Wi-Fi, locked | verified | ICB |
| 21 | Computer backup: Mac Finder; Windows Apple 裝置 app or iTunes | verified | MACBK; https://support.apple.com/zh-mo/108392 |
| 22 | First connection shows 「信任這部電腦」 and asks for passcode | verified | TRUST |
| 23 | Remote erase: iCloud.com 「尋找裝置」 > 「清除此裝置」; then remove from account | verified (removal is a separate Apple article 「從 iCloud.com 的「尋找裝置」移除裝置」) | ERASE |
| 24 | Inspection checks display/touch, pressure marks, burn-in, Face ID, cameras, speaker, charging, network, parts record | verified (site's own process page) | PROC |
| 25 | Cannot-power-on phones generally can't be priced; consider environmental recycling | consistent with existing site copy | src/content/guides/old-phone-disposal-hong-kong.json |
| 26 | 「有損壞／爆屏」 ×0.5; battery stacks (×0.5 × 0.85 = ×0.425) | site estimate | QuoteForm.astro |
| 27 | Verdicts: 13 / 15 / 16 Pro not worth; 17 Pro Max 256GB about break-even; 2TB clearly above; AppleCare+ HK$228 worth | correct at 2026-11-26 prices: ×0.5 = 700, 1,500 vs 2,139; 2,000 vs 2,579; 3,400 vs 3,249; 4,400 vs 3,249. Re-check if prices or fees change | prices.json; SCRPAGE |
| 28 | New iPhones each September; older models' prices usually drop after | well-known / general tendency | – |
