# Fact-check log: applecare-hong-kong

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json; all variants used are non-null). Multipliers ×0.5 (有損壞／爆屏) and ×0.85 (battery <80%) are the site's own estimate (src/components/QuoteForm.astro), not external facts.

Sources:
- TERMS = https://www.apple.com/legal/sales-support/applecare/applecareplus/2610/261028_applecareplus_hk.pdf (AppleCare+ HK terms, footer "093026 AC+ Hong Kong v1.8 – Traditional Chinese", URL dated 2026-10-28; read with pdftotext). Previous version checked for comparison: .../2510/251015_applecareplus_hk.pdf (v1.4)
- FEES = https://www.apple.com/hk/legal/applecare/fees-deductibles/ (費用及自負額)
- ACPAGE = https://www.apple.com/hk/applecare/
- STORE = https://www.apple.com/hk/shop/buy-iphone and model pages /iphone-17e, /iphone-17, /iphone-16, /iphone-air, /iphone-18-pro (covers 18 Pro and 18 Pro Max), /iphone-duo — AppleCare+ prices read from the page's embedded APPLECARE_BOOTSTRAP data (planDetails, "Pay in full")
- COV = https://support.apple.com/zh-hk/HT5690 (找出有關保養或 AppleCare 服務計劃的資料, 發佈日期 2026-07-20)
- SCRPAGE / BATPAGE = see docs/fact-check/iphone-cracked-screen-sell-or-repair.md and iphone-battery-replacement-price.md (out-of-warranty fees checked 2026-11-26)

## AppleCare+ plan prices (STORE, pay in full, checked 2026-11-26)

| Model | Part | Price |
|---|---|---|
| iPhone 17e | SCYX3ZX/A | HK$1,099 |
| iPhone 17 | SWXP2ZX/A | HK$1,399 |
| iPhone 16 (6.1" only on sale) | SNH72ZX/A | HK$1,399 |
| iPhone Air | SWXV2ZX/A | HK$1,799 |
| iPhone 18 Pro | SHHJ3ZX/A | HK$1,799 |
| iPhone 18 Pro Max | SHJ63ZX/A | HK$1,799 |
| iPhone Duo | SHJV3ZX/A | HK$2,599 |

ACPAGE price table groups the same models (17e; 17 & 16; Air; 18 Pro & 18 Pro Max; Duo) under a 「2 年」 column (prices load by script there). Buy-iPhone index lists only these models; /iphone-17-pro redirects to the index and /iphone-17-pro-max returns 404.

## Claims

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | iPhone AppleCare+ in HK is a 2-year plan | verified | ACPAGE (「2 年」 column) |
| 2 | Unlimited accidental damage incidents, fee per incident | verified (「無限次的「維修活動」」) | TERMS §2.4; ACPAGE |
| 3 | Fees: front display HK$228; back glass HK$228 (not SE / pre-iPhone 12); Duo outer layer HK$149, inner display HK$788; other accidental damage HK$788 | verified | TERMS §2.4; FEES |
| 4 | Screen + back glass together: charged per damaged component, capped at the other-damage fee | verified (2026 terms wording 「針對各受損元件，將單獨收取…最高可達…「iPhone 其他意外損壞」」). Note: changed from earlier v1.4 | TERMS §2.4 |
| 5 | Other damage (e.g. bent/dented case) → other accidental damage fee | verified | TERMS §2.4 |
| 6 | Express replacement for screen/back glass charged as other accidental damage | verified | TERMS §2.4, §5 |
| 7 | Apple and all authorised service providers charge the same fee for AppleCare repairs | verified | SCRPAGE (AppleCare tab), see cracked-screen log |
| 8 | Battery below 80% of original capacity replaced at no charge (HK$0) | verified | TERMS §2.1; ACPAGE; BATPAGE |
| 9 | Manufacturing defects no fee; hardware coverage through plan period; priority tech support | verified (ACPAGE footnote 「機械故障並不收取任何維修費」) | ACPAGE; TERMS §2.1, §2.5 |
| 10 | Limited warranty 1 year, excludes accidental damage | verified | BATPAGE; ACPAGE FAQ |
| 11 | No theft or loss cover in HK | verified ("Coverage does not include theft or loss of your device"; exclusion 「要求更換遺失或失竊的「保障範圍內設備」」) | STORE; TERMS §3.1(c) |
| 12 | Theft & loss plans exist in some other regions | verified (Apple: AppleCare+ with Theft and Loss only in some regions) | https://support.apple.com/zh-cn/HT2526 |
| 13 | Price range HK$1,099–HK$2,599 by model (table) | verified | STORE |
| 14 | Online store offers only "Pay in full" for iPhone; terms mention both 整筆付清計劃 and 每月付款計劃 | verified; monthly availability for iPhone in HK could not be confirmed, so reader told to ask Apple | STORE; TERMS §1 |
| 15 | Apple not obliged to renew the plan | verified | TERMS §10(j) |
| 16 | Buy with the device in store / online / Apple Store app; or within 60 days of buying a new product via Settings app | verified | ACPAGE FAQ |
| 17 | Covered device must be new, bought or leased from Apple or an authorised reseller | verified | TERMS §1 |
| 18 | Plan offered and valid only in HK; minors cannot buy | verified | TERMS §10(d) |
| 19 | Plan bought after the device does not cover pre-existing issues | verified | TERMS §3.1(i) |
| 20 | Apple may limit service to original purchase country | verified | TERMS §3.1 |
| 21 | Cancel any time; within 30 days full refund less benefits used; after 30 days pro-rata less benefits; monthly plan ends at end of last paid month, no refund | verified | TERMS §8 |
| 22 | Exclusions: normal wear / cosmetic, reckless or deliberate damage, fire/earthquake, opened or repaired by non-Apple/non-authorised people, altered serial, data loss | verified | TERMS §3.1, §3.2 |
| 23 | Third-party repaired iPhone may be refused later AppleCare+ repairs | inference from §3.1(h), written as 「有可能」 | TERMS §3.1(h) |
| 24 | Check coverage: 「設定」>「一般」>「AppleCare 與保養」; checkcoverage.apple.com with serial; mysupport.apple.com; proof of coverage; two-factor tip | verified | COV |
| 25 | Transfer: one-time permanent transfer; hand over proof of purchase, plan confirmation, printed plan materials, contract; written notice to AppleCare Administration, Apple Asia Limited with contract number, serial and new owner's name/address/phone/email; transferee accepts terms; monthly plan transferee takes over payments | verified | TERMS §9 |
| 26 | Out-of-warranty comparison: iPhone 17 Pro Max / 18 Pro Max screen HK$3,249, 18 Pro Max battery HK$999 | verified 2026-11-26 in earlier logs | SCRPAGE; BATPAGE |
| 27 | 18 Pro Max: HK$1,799 + HK$228 = HK$2,027 < HK$3,249 | arithmetic | STORE; TERMS |
| 28 | Worked examples: crack ×0.5, battery <80% ×0.85 (×0.15 recovered); 17 Pro Max / Air / 17 crack gaps (3,400 / 2,100 / 2,100 at current prices) all above HK$788 | site estimate; correct at 2026-11-26 prices. Re-check if prices change | QuoteForm.astro; prices.json |
| 29 | Parts history shows Apple genuine repair after Apple repair | verified in earlier log | SCRPAGE; https://support.apple.com/zh-hk/102658 |
| 30 | Selling to a recycling shop involves no transfer; quote based on model, storage, condition | site's own process | src/pages/process.astro |
