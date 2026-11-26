# Fact-check: foldable-phone-recycle

Checked 2026-11-26 (publishedAt/updatedAt 2026-11-26). Recycling prices are placeholders from `src/data/prices.json`. Only non-null variants are used: Z Fold8 256/512GB, Z Fold7 256/512GB, Z Fold6 512GB (256GB is null and shown as —), Z Fold5 256/512GB, Z Flip8/7/6/5 256/512GB, S26/S25/S24 Ultra 256GB. iPhone Duo variants are all null, so the post uses no iPhone Duo placeholders. Official Samsung fees are typed as HK$ with the sources below. The post tells readers to confirm fees with Samsung HK because they change.

Sources:
- REPAIR = https://www.samsung.com/hk_en/support/smartphone-screen-module-replacement/ (Samsung HK "Smartphone Screen, Battery and Galaxy Ring Repair Price Estimation", information update date 9 October 2026; prices read from the page HTML on 2026-11-26. The interactive selector says "under maintenance", but the price blocks are in the page)
- CARE = https://www.samsung.com/hk/offer/samsung-care-plus-screen-care/ (EN: https://www.samsung.com/hk_en/offer/samsung-care-plus-screen-care/), information update date 6 Oct 2025 / 2025年10月6日
- PREM = https://www.samsung.com/hk_en/support/zfold7-zflip7-premium-service/ (Galaxy Z Premium Service, Fold7/Flip7 and Fold8/Fold8 Ultra/Flip8)
- PREC = https://www.samsung.com/hk/support/mobile-devices/precautions-when-using-the-galaxy-foldable-devices/ (使用Galaxy摺疊式裝置時的預防措施, last updated 2026年1月8日)
- IP = https://www.samsung.com/us/support/answer/ANS10001610 (Galaxy phones and tablets dust and water resistance)
- IP48 = https://www.samsung.com/uk/mobile-phone-buying-guide/most-durable-smartphone/
- MODEL = https://www.samsung.com/hk/support/mobile-devices/how-to-find-phone-model-number-serial-number-or-imei-number
- DUO = https://www.apple.com/hk/iphone-duo/ ; NRDUO = https://www.apple.com/hk/newsroom/2026/09/apple-unveils-iphone-duo/ ; BATT = https://support.apple.com/zh-hk/106348
- PILLAR = docs/fact-check/samsung-trade-in-vs-recycling.md (reused verified Samsung HK facts)
- I18 = docs/fact-check/iphone-18-recycle-price.md (reused verified iPhone Duo facts)
- BRIEF = docs/content-brief.md (Apple HK wording)

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | PRICE: newest foldables have the highest Samsung recycling prices, but they drop more steeply across generations than Galaxy S Ultra; Z Flip drops the most | correct per prices.json (Fold8 256 > Fold7 > Fold5; Flip8 > Flip7 > Flip6 > Flip5; S26U > S25U > S24U changes more evenly). No percentages quoted | src/data/prices.json; PILLAR #23 |
| 2 | PRICE: Z Fold higher than Z Flip in the same generation (Fold7 512 vs Flip7 512) | correct | src/data/prices.json |
| 3 | PRICE: Z Fold6 256GB has no reference price | correct (null), shown as — | src/data/prices.json |
| 4 | Launch years in table (Fold/Flip5 2023, 6 2024, 7 2025, 8 2026) | correct (the `year` field in prices.json) | src/data/prices.json |
| 5 | Z Fold8 and Z Flip8 launched in July 2026; new Z models usually launch mid-year | correct | PILLAR #8 (https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8) |
| 6 | Why foldables drop faster (buyers worry about inner screen and hinge; new generations improve) | general tendency, worded as 一般／通常; no statistics | — |
| 7 | Upgrading storage: the extra cost is not always recovered | general tendency | — |
| 8 | A slight crease is normal | correct | PILLAR #12 (https://www.samsung.com/us/support/answer/ANS10001589/) |
| 9 | Samsung HK: do not peel off the screen protector or add other films or stickers, as this may damage the device | correct (「建議您不要撕下屏幕保護膜，也不要安裝其他薄膜或貼紙，否則可能會損壞裝置。」) | PREC; PILLAR #11 |
| 10 | Samsung HK: don't press the screen with sharp objects such as pens or nails, and don't use excessive force | correct | PREC |
| 11 | Samsung HK: don't put cards, coins or keys between the screens when folding | correct | PREC |
| 12 | Samsung HK: sand and small particles may scratch or dent the screen | correct | PREC |
| 13 | Samsung HK: don't submerge deeper than 1.5 m in fresh water for more than 30 minutes; avoid strong water flow | correct | PREC |
| 14 | Z Fold5 and Z Flip5 are IPX8; Z Fold6, Z Flip6, Z Fold7, Z Flip7, Z Fold8, Z Flip8 are IP48 | correct | IP |
| 15 | IP48 only protects against solids larger than 1 mm and does not mean resistance to fine sand or dust | correct (Samsung: "protection against a solid object greater than 1mm"; footnote "Not dust- or sand-resistant") | IP48 |
| 16 | Model number is found in 「設定」>「關於手機」 | correct | MODEL |
| 17 | Official HK inner module exchange / inner screen repair / outer screen repair: Fold8 HK$5,750 / 4,230 / 1,260; Fold7 HK$5,030 / 4,110 / 1,200; Fold6 HK$4,800 / 3,930 / 1,200; Fold5 HK$4,780 / 3,910 / 1,200; Flip8 HK$3,430 / 2,010 / 1,160; Flip7 HK$2,830 / 2,010 / 1,030; Flip6 HK$2,530 / 2,010 / 1,030; Flip5 HK$2,430 / 2,110 / 1,030 | correct, checked 2026-11-26 (page update date 9 Oct 2026). Model codes: Fold8 SM-F9710, Fold7 SM-F9660, Fold6 SM-F9560, Fold5 SM-F9460, Flip8 SM-F7760, Flip7 SM-F7660, Flip6 SM-F7410, Flip5 SM-F7310. A search snippet showed Fold7 inner HK$5,120 (likely an older version). The current page HTML shows HK$5,030, which is used | REPAIR |
| 18 | Prices include the HK$200 inspection fee; "screen repair" replaces the display only, and the mid-frame and other parts are charged separately after inspection; prices apply to screen damage or out-of-warranty devices; adjustments are not announced in advance | correct | REPAIR |
| 19 | Samsung Care+ Screen Care: Galaxy Z only; one inner-display replacement in the effective period for a service fee; RRP Z Flip HK$498, Z Fold HK$698; service fee Z Flip HK$750, Z Fold HK$1,100; update date 6 Oct 2025 | correct | CARE |
| 20 | Care+ must be bought with the new device or within 30 days; HK or Macau authorised-dealer genuine (行貨) devices only; it is a service plan, not insurance | correct | CARE |
| 21 | Z Fold7/Flip7 and Fold8 series bought on or before 30 Nov 2026: two free original main-screen protector replacements within one year of purchase. Bought on or after 1 Dec 2026: paid, Z Fold series HK$250, Z Flip series HK$150 | correct | PREM |
| 22 | Damaged phones can still be quoted, with the price adjusted for the damage | consistent with pillar and site copy | PILLAR |
| 23 | iPhone Duo is Apple's first foldable iPhone, on sale in HK on 23 Oct 2026, 256GB–2TB | correct | I18 #3, #7; NRDUO; DUO |
| 24 | iPhone Duo inner screen 7.6", outer 5.4" | correct | I18 #11; NRDUO |
| 25 | iPhone Duo is IP68 (「具備 IP68 防護等級，防濺耐水及防塵」) | correct (read from page HTML) | DUO |
| 26 | iPhone Duo is eSIM-only worldwide | correct | DUO; I18 #13 |
| 27 | iPhone Duo battery health shows data for two batteries separately; path 「設定」>「電池」>「電池健康度」 | correct | BATT; I18 #19 |
| 28 | iPhone Duo inner display has a scratch-resistant coating; optically clear adhesive lets layers slide to minimise stress and creasing | correct | DUO |
| 29 | iPhone Duo has no reference price on this site (all variants 「查詢報價」) | correct (all null) | src/data/prices.json |
| 30 | Apple wording: 「Apple 帳户（前稱 Apple ID）」; 「設定」>「一般」>「轉移或重設 iPhone」>「清除所有內容和設定」; 「哈囉」 | correct | BRIEF |
| 31 | Samsung HK Trade in: must buy a new Samsung device; paid by bank transfer or FPS to a HK bank account, usually within 2–3 working days after final inspection; one use per new-device IMEI/serial; accounts and locks not removed are ineligible | correct (reused) | PILLAR #1–3, #6 (https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/) |
| 32 | Damaged foldables may get a much lower official value or be refused | worded as 可能; consistent with PILLAR #6, #21 | PILLAR |
| 33 | Reset path 「設定」>「一般管理」>「重設」>「重設為原廠設定」>「重設」>「全部刪除」; resetting other than through Settings can ask for the previous Google account (FRP) | correct (reused) | PILLAR #13, #16 (https://www.samsung.com/hk/support/mobile-devices/how-to-reset-the-factory-settings/) |
| 34 | Find My Mobile location varies by One UI version; signing out of the Samsung account also turns it off | correct (reused) | PILLAR #15 |
| 35 | Account removal under 「帳戶與備份」, names vary by version | softened (reused) | PILLAR #14 |
| 36 | Backup via Smart Switch, Samsung Cloud or Google | correct | PILLAR #19; docs/fact-check/samsung-smart-switch.md |
| 37 | Z Fold5/Fold6 support a separately sold S Pen; Z Fold7 dropped S Pen support | correct (reused) | PILLAR #10 |
| 38 | Own service: online quote, MTR or agreed place, 5–10 minute inspection, cash or FPS | consistent with the content brief | docs/content-brief.md |

Could not verify / left out: whether Samsung Care+ Screen Care or the free protector benefit passes to a second-hand buyer (not stated, not claimed); official Samsung HK hinge repair prices (not published on REPAIR, not quoted); Z Fold8 Ultra is not in prices.json, so it is not covered.
