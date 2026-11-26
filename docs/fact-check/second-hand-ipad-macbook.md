# Fact-check log: second-hand-ipad-macbook

Checked 2026-11-26. Recycling prices are placeholders from `src/data/prices.json` (all variants used are non-null). The ×1.2 / ×1.3 second-hand range is this site's rough estimate (same method as the pillar, see docs/fact-check/second-hand-iphone-price-guide.md #1), labelled in the post as 「推算，不是市場統計」. Business claims (online quote, MTR or agreed-place handover, 5–10 min inspection, cash/FPS) are the owner's own and match `src/pages/process.astro`. No second-hand shop is named.

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Fair shop price ≈ 1.2–1.3 × recycling price | site's rough estimate, labelled as such (not a statistic) | docs/fact-check/second-hand-iphone-price-guide.md #1 |
| 2 | Private sellers usually fall between recycling and shop price; near/below recycling price is a warning sign | general reasoning, consistent with pillar | docs/fact-check/second-hand-iphone-price-guide.md #3 |
| 3 | Cellular iPads, larger storage and higher-RAM MacBooks recycle higher | correct per price table ("一般") | src/data/prices.json |
| 4 | iPadOS 27 is the current iPadOS (released Sept 2026; 27.0.1 exists) | correct | https://support.apple.com/149075 ; https://9to5mac.com/2026/09/09/ipados-27-will-be-launched-on-september-14/ |
| 5 | iPadOS 27 compatible: iPad Pro (第 4 代及更新的型號，M1 及更新的型號), iPad Air (第 4 代及更新的型號，M2 及更新的型號), iPad (第 9 代及更新的型號，A16 型號), iPad mini (第 6 代，A17 Pro 及更新的型號) | correct, quoted from Apple HK | https://www.apple.com/hk/ipados/ |
| 6 | iPad (8th gen) and iPad mini (5th gen) are not supported by iPadOS 27 | correct (not on Apple list; dropped list also confirmed by MacRumors, which also lists iPad Pro 11" 2nd gen and 12.9" 4th gen as still supported) | https://www.apple.com/hk/ipados/ ; https://www.macrumors.com/2026/06/08/ipados-27-drops-support-for-a-wave-of-ipads/ |
| 7 | Table: Pro 11 M1/M2, Air 5, mini 6, iPad 9/10 support iPadOS 27 | correct per #5 | same |
| 8 | iPad (9th gen) uses Lightning | correct (well-known; Apple Pencil 1st gen compatibility list puts iPad 6th–9th gen with Lightning-era 1st gen Pencil; iPad 10th gen needs USB-C adapter) | https://support.apple.com/zh-hk/108937 |
| 9 | Apple Pencil Pro only for iPad Pro (M4, M5), iPad Air (M2–M4), iPad mini (A17 Pro, A20 Pro); Apple Pencil (第 2 代) for iPad mini 6, iPad Air 4/5, some older iPad Pro; iPad 10 needs USB-C to Apple Pencil adapter for 1st gen | correct | https://support.apple.com/zh-hk/108937 (published 2026-11-12) |
| 10 | macOS Tahoe 26 is the last major release for Intel Macs; only 16" MBP 2019 and 13" MBP 2020 with four Thunderbolt 3 ports among Intel MacBooks support it; no Intel MacBook Air | correct (reused from pillar log) | docs/fact-check/ipad-macbook-recycling-guide.md #27 ; https://support.apple.com/en-mz/122867 |
| 11 | 13" MBP 2020 four-Thunderbolt model has 2.0GHz quad-core i5 (so the 2.0GHz i5 price-table variant is the Tahoe-capable one) | correct | https://support.apple.com/en-us/111339 |
| 12 | macOS 27 (Golden Gate) compatible MacBooks: MacBook Air / MacBook Pro 配備 Apple 晶片 (2020 年及更新的型號) (plus MacBook Neo and others); no Intel Mac | correct | https://www.apple.com/hk/macos/ ; https://appleinsider.com/articles/26/06/08/macos-27-compatibility-list-focuses-entirely-on-apple-silicon |
| 13 | M1 supports macOS 27 | correct per #12 (Apple silicon MacBooks 2020 and later) | https://www.apple.com/hk/macos/ |
| 14 | MacBook Air 13" (M4) starts at 16 GB RAM | correct (all M4 MBA variants in price table are 16 GB+; Apple's M4 Air base config is 16 GB) | src/data/prices.json ; https://www.apple.com/newsroom/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/ (16GB starting unified memory) |
| 15 | Many M2/M3 models are 8 GB | correct per price table variants | src/data/prices.json |
| 16 | RAM and SSD generally not user-upgradeable | correct (reused) | docs/fact-check/ipad-macbook-recycling-guide.md #22 |
| 17 | 8 GB enough for office/web; 16 GB+ for video/pro apps | general advice ("一般"), no statistic | — |
| 18 | 「哈囉」 screen = ready; passcode screen or Home Screen = not erased; asked for previous owner's Apple 帳户 = don't buy | correct | https://support.apple.com/zh-hk/108794 |
| 19 | Model, capacity, serial in 「設定」>「一般」>「關於本機」 | correct | https://support.apple.com/zh-hk/108037 |
| 20 | iPad battery health only on iPad Pro (M4, M5), iPad Air (M2, M3, M4), iPad mini (A17 Pro, A20 Pro), iPad (A16), at 「設定」>「電池」>「電池健康度」 | correct (reused) | https://support.apple.com/zh-hk/117759 (docs/fact-check/ipad-macbook-recycling-guide.md #7) |
| 21 | Remote Management pane appears in Setup Assistant for devices added to Apple School Manager / Apple Business Manager and cannot be skipped | correct (Apple: "You can't skip this pane if you add the device to Apple School Manager or Apple Business Manager"); Chinese label 「遠端管理」 given with English in brackets because the HK UI string was not verified | https://support.apple.com/en-hk/guide/deployment/depdeff4a547/web |
| 22 | Automated enrolment: device enrols from setup; supervised device can't be unenrolled by the user; enforced enrolment means it must enrol to be used | correct | https://support.apple.com/en-hk/guide/deployment/dep73069dd57/web |
| 23 | Only the organisation can release the device; after release it must be erased and restored | correct ("After a device is released, it needs to be erased and restored"; release done by the organisation's admin) | https://support.apple.com/en-hk/guide/business/axmec4d28461/web |
| 24 | 「Apple 商務管理」/「Apple 校務管理」 Chinese names | descriptive translation; English product names given alongside (Apple now titles the service "Apple Business") | same |
| 25 | Mac Activation Lock: Apple silicon or T2 Macs with macOS Catalina 10.15+; Apple 帳户 password needed to erase or reactivate | correct | https://support.apple.com/zh-hk/102541 (published 2026-07-09) |
| 26 | 「關於這部 Mac」 in Apple menu shows chip, memory, serial | correct (standard macOS Apple menu item; HK wording 「關於這部 Mac」 matches site copy). No separate Apple URL checked | — |
| 27 | Cycle count: hold Option, Apple menu > 「系統資料」> sidebar 「電源」> 「電池資料」 循環使用次數 | correct | https://support.apple.com/zh-hk/102888 (published 2026-11-12) |
| 28 | Battery "建議維修" message | correct (Apple article "如你的 Mac 手提電腦顯示電池「建議進行維修」"); post says 「提示電池建議維修」 | https://support.apple.com/zh-hk/102888 |
| 29 | Butterfly keyboard on some 2015–2019 Intel models | correct (reused) | docs/fact-check/ipad-macbook-recycling-guide.md #26 |
| 30 | Anti-reflective coating delamination on some older Retina MacBooks | correct (reused; secondary source) | docs/fact-check/ipad-macbook-recycling-guide.md #25 |
| 31 | Swelling signs (trackpad raised, base uneven, gaps) → don't buy | general safety advice, consistent with site copy | docs/fact-check/ipad-macbook-recycling-guide.md #29 |
| 32 | Apple HK Certified Refurbished sells Mac and iPad, fully tested, one-year warranty; stock changes | correct (reused) | https://www.apple.com/hk/shop/refurbished (docs/fact-check/second-hand-phone-platforms.md #1–2) |
| 33 | Channel table (refurb / shop / platform) price and protection levels | general tendencies ("一般"), no statistics | consistent with docs/fact-check/second-hand-phone-platforms.md #15 |
| 34 | Before selling: back up, turn off Find My, sign out, 「清除所有內容和設定」; Intel firmware password off | correct (reused) | docs/fact-check/ipad-macbook-recycling-guide.md #13, #28, #30 |
| 35 | Apple 帳户 naming: first mention 「Apple 帳户（前稱 Apple ID）」 | correct | docs/content-brief.md |

Not verified, so left out or kept general: exact HK Chinese UI label of the Remote Management pane (given as 「遠端管理」 with English); iPad menu path for MDM profiles (not given); MacBook max cycle counts (not given); Apple's statement about Intel security-update duration (not used).
