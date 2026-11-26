# Fact-check log: damaged-phone-water-battery

Checked 2026-11-26. Recycling prices are placeholders from `src/data/prices.json` (iphone-16/128GB and galaxy-s24-ultra/256GB, both non-null). 「有損壞／爆屏」 ×0.5 is the site's own estimate from `src/components/QuoteForm.astro`, not an external fact. No HK$ fees are quoted. Business claims (inspection items, MTR handover, cash/FPS) match `src/pages/process.astro`.

Sources:
- LIQ = https://support.apple.com/zh-hk/102643 (如果在 iPhone 上看到液體偵測提示, published 2024-11-06)
- WR = https://support.apple.com/zh-hk/108039 (關於 iPhone 7 和之後的型號的防濺、抗水與防塵功能, published 2026-06-24)
- LCI = https://support.apple.com/zh-hk/109350 (iPhone 或 iPod 的浸水和其他液體造成的損壞不在保養範圍內, published 2026-05-29)
- CHG = https://support.apple.com/zh-hk/108805 (如果 iPhone、 或 iPod touch 無法充電, published 2025-12-12)
- SAFE = https://support.apple.com/zh-hk/guide/iphone/iph301fc905/ios (iPhone 重要安全資訊)
- SHIP18 = https://support.apple.com/zh-hk/127108 (mail-in conditions; reused from docs/fact-check/iphone-cracked-screen-sell-or-repair.md #18)
- SWR = https://www.samsung.com/hk/support/mobile-devices/galaxy-phone-water-resistance/ (Galaxy 手機的抗水功能)
- SWET = https://www.samsung.com/hk_en/support/mobile-devices/protect-galaxy-device-after-water-exposure/
- SCHG = https://www.samsung.com/hk/support/mobile-devices/issues-with-wired-charging (有線充電的問題)
- CC = https://www.consumer.org.hk/tc/article/541-lithium-battery/541-lithium-battery-tips (消委會《選擇》541 期, Nov 2021)
- TI = https://www.apple.com/hk/trade-in/ (reused from docs/fact-check/apple-trade-in-hong-kong.md #8)

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Unplug cable and the other end from the adapter | correct | LIQ |
| 2 | Wipe with soft lint-free cloth (e.g. lens cloth) | correct | WR |
| 3 | Connector down, tap iPhone against hand to remove liquid | correct | LIQ ; WR |
| 4 | Dry in a ventilated dry place; fan blowing cool air into the connector may help | correct (Apple); "away from direct sunlight" from Samsung | WR ; LIQ ; SWET |
| 5 | Wait at least 5 hours after iPhone gets wet before charging with a cable / connecting accessories | correct (「請等候至少 5 小時，再使用 Lightning 或 USB-C 連接線充電或連接配件」) | WR |
| 6 | Samsung: don't connect charger or accessories until completely dry | correct (「在產品完全乾燥前，不要連接充電器或配件」) | SWR |
| 7 | Open SIM tray only after iPhone is dry | correct | WR |
| 8 | No rice bag (rice particles can damage iPhone) | correct (「切勿將 iPhone 放入米袋，以免米粒進入 iPhone 而導致損壞」) — attributed to Apple only | LIQ |
| 9 | No external heat source / hair dryer; no compressed air | correct for both Apple and Samsung | LIQ ; WR ; SWR ; SWET |
| 10 | Don't insert cotton swabs or paper towels into the connector | correct | LIQ ; WR |
| 11 | Charging when wet may damage internal circuits; damp charging may cause fire, electric shock | correct (Samsung: moisture may damage internal circuits; Apple: charging in damp conditions may cause fire, electric shock, injury) | SCHG ; SAFE |
| 12 | Non-water liquid: rinse affected area with tap water, then wipe | correct (Apple, iPhone 7 and later) | WR |
| 13 | Samsung: internal damage/corrosion may occur even if device appears to work; non-water-resistant Galaxy: power off, remove SIM/SD, don't power on, get inspected | correct | SWET |
| 14 | Water resistance is not permanent and may decrease with wear (Apple and Samsung) | correct | WR ; SWR |
| 15 | Liquid damage not covered by warranty / Apple one-year limited warranty | correct | WR ; LCI |
| 16 | LCI normally white or silver, turns fully red on contact with water or water-containing liquid | correct | LCI |
| 17 | Avoid swimming, showering, sauna with iPhone | correct | WR |
| 18 | Liquid alert names 「無法充電」「在 USB-C 接頭中偵測到液體」「Lightning 接頭偵測到液體」「偵測到液體」; applies to iPhone XS, XS Max, XR or later | correct | LIQ |
| 19 | Alert steps: unplug, tap, dry up to a day, wait at least 30 minutes then try | correct | LIQ |
| 20 | Alert again = liquid still in connector or under cable pins; up to 24 hours to dry | correct (「如果再次出現提示，就表示接頭內或連接線針腳下仍有液體。」) | LIQ |
| 21 | Wireless charger still usable; back of iPhone should be dry | correct (「你仍可使用無線充電器為 iPhone 充電。」) | LIQ |
| 22 | Emergency override possible; pins may corrode causing permanent damage | correct | LIQ |
| 23 | Samsung device alerts on moisture or debris in the port; dry with soft cloth or air-dry; seek professional help if still failing | correct | SCHG |
| 24 | Samsung: avoid salt water, pool water, soapy water, oil, perfume, sunscreen, alcohol liquids; no sauna/steam room | correct | SWR |
| 25 | iPhone won't charge steps: power source, restart, check cable/adapter, wall socket/other socket, clear port debris, charge half hour, force restart, charge another half hour, may need service | correct | CHG |
| 26 | Optimised Battery Charging pauses at 80%; overheating may limit charge after 80%; move somewhere cooler; iPhone 15 and later may have a charge limit | correct | CHG |
| 27 | Samsung wired charging: update software, stop using cracked/exposed cable, reseat, try other adapter/cable, wall outlet not computer, power off before cleaning port, torch, blow gently, service centre if blocked | correct | SCHG |
| 28 | Troubleshooting table | summary of #19–27 | LIQ ; CHG ; SCHG |
| 29 | Swelling signs (screen lifted, body raised, gaps) | general description (same as cracked-screen post) | docs/fact-check/iphone-cracked-screen-sell-or-repair.md #18 |
| 30 | iPhone/battery can be damaged by dropping, crushing, liquid; stop using if suspected damaged (overheating or injury) | correct | SAFE |
| 31 | Consumer Council: if battery/charger/cable deformed, damaged or overheating, stop using and unplug | correct | CC |
| 32 | Battery service only by trained technicians (overheating, fire, injury) | correct | SAFE |
| 33 | Don't ship if gas, odour or swelling separates the enclosure; contact Apple Support or visit Apple Store / authorised service provider | correct (reused) | SHIP18 |
| 34 | "Don't press or puncture" a swollen battery | general safety advice, not quoted as an official statement; consistent with Apple's crushing/puncturing damage warning | SAFE |
| 35 | Store in a cool, dry place away from clothing and flammable items | correct (CC advice for lithium batteries) | CC |
| 36 | Lithium batteries / products shouldn't go into general rubbish (compaction may short-circuit) | correct | CC ; SAFE (recycle separately from household waste) |
| 37 | Apple Trade In does not accept devices with swollen or damaged batteries | correct (reused) | TI ; docs/fact-check/apple-trade-in-hong-kong.md #8 |
| 38 | Dried-out phone that works normally → normal quote with honest disclosure; working but faulty → damaged; dead → generally no price; swollen → many buyers/collection points won't accept as-is | owner policy / general (kept general, no shop named) | src/components/QuoteForm.astro ; docs/fact-check/old-phone-disposal-hong-kong.md #18, #21 |
| 39 | 「有損壞／爆屏」 ≈ half of normal price; examples iPhone 16 128GB and Galaxy S24 Ultra 256GB ×0.5 | site estimate (QuoteForm ×0.5), placeholders only | src/components/QuoteForm.astro ; src/data/prices.json |
| 40 | Lower battery health further adjusts the quote | correct (QuoteForm battery tiers ×0.95 / ×0.9 / ×0.85) | src/components/QuoteForm.astro |
| 41 | Inspection tests charging, speaker, mic, cameras, Face ID, network | correct | src/pages/process.astro |
| 42 | Dead phone: free environmental recycling such as 綠在區區; remote erase via iCloud.com 「尋找裝置」 or Google 「尋找中心」 and remove from account | correct (reused) | docs/fact-check/old-phone-disposal-hong-kong.md #5, #16 |

Not used because not verified on an official HK source: Fire Services Department guidance specific to swollen phone batteries (no hkfsd.gov.hk page found); a Samsung HK page on swollen batteries (none found); whether AppleCare+ liquid-damage repairs fall under a specific fee tier (no fee quoted).
