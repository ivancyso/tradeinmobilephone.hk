# Fact-check log: apple-trade-in-hong-kong

Checked 2026-11-25/26 against Apple Hong Kong pages. Body rewritten. No Apple Trade In amounts appear in the post.

Sources:
- TI = https://www.apple.com/hk/trade-in/ (same content at https://www.apple.com/hk-zh/shop/trade-in)
- LEGAL = https://www.apple.com/legal/sales-support/trade-in/hk/
- PREP = https://www.apple.com/hk-zh/shop/browse/overlay/tradein_landing/tradein_preparation
- VAL = https://www.apple.com/hk-zh/shop/browse/overlay/tradein_landing/iphone_values
- GC = https://www.apple.com/hk/shop/gift-cards (Apple Store Gift Card terms)
- AND = https://www.apple.com/hk/iphone/ (Android trade-in banner)
- SELL = https://support.apple.com/zh-hk/109511
- PARTS = https://support.apple.com/zh-hk/102658
- SAM = https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/

| # | Claim (original) | Verdict | Now says / note | Source |
|---|---|---|---|---|
| 1 | Trade In can be done online or at Apple Store | correct | — | TI |
| 2 | Value is credit toward a new product, "部分裝置可換 Apple 禮品卡" | corrected | Any trade-in can go to purchase credit **or** an equal-value Apple Store 禮品卡, including without buying (via partner site) | TI |
| 3 | No cash | correct | Online credit is given back to the original payment method, up to the purchase total | TI |
| 4 | "要同時購買新產品 / 只想賣舊機 Trade In 未必適合 / 一般要配合購買" | corrected | Gift-card route needs no purchase, but the card is only usable for Apple purchases in HK. Kept as a "常見誤解" item | TI; GC |
| 5 | Surplus over new device price issued as Apple gift card by email | correct | Uses Apple's term 「Apple Store 禮品卡」 | TI |
| 6 | Gift card only usable in HK Apple Store / apple.com / phone order, not cash | correct | Added: not at resellers | GC |
| 7 | Free recycling for devices with no trade-in value | correct | Any model or condition | TI |
| 8 | (new) Swollen, damaged or defective battery devices not accepted | added | Footnote ② | TI |
| 9 | Duplicate "免費回收" bullet; heading says 三種 but listed 4 | corrected | De-duplicated to 3 | — |
| 10 | Eligible devices: iPhone, iPad, Mac, "部分其他品牌的智能手機" | corrected | HK categories are 智能電話/平板電腦/電腦/Watch. Android phones are accepted for a new iPhone and credited as Apple 禮品卡. Value depends on 製造商 | TI; AND |
| 11 | Online step "完成購買，估價會以折抵形式處理" | corrected | Online buyers pay in full. Credit is applied after Apple receives the device and confirms its condition | TI |
| 12 | "舊機要在收到新機後 14 日內寄出" | corrected | Apple must **receive** the device within 14 days of you receiving the new one. The quote is valid for those 14 days | TI; LEGAL |
| 13 | Inspection: matching = confirmed, mismatch = adjusted | corrected | Added: if lowered you can accept or decline, and declining cancels and returns the device. If raised, credit goes up automatically. Shipping options are courier pickup or drop-off | TI; LEGAL |
| 14 | (new) Online trade-in usually takes 2–3 weeks, credit 3–5 working days | added | 2–3 weeks used in post | TI |
| 15 | Must be adult; "身份證明（如有要求）" | corrected | In-store trade-in **requires** valid photo ID. Must be of legal age | TI footnote ①; LEGAL |
| 16 | In-store: staff check and confirm, may differ from online quote | correct | Wording follows Apple ("Specialist 會在現場評估") | TI |
| 17 | Trade-in available at all retail stores | softened | Apple says apple.com and all stores, but the footnote says offers may not be at every store. Now says stores' offers and requirements may differ | TI |
| 18 | "不論網上還是現場都要先…抹資料"; "Trade In 不用抹資料是誤解，都應自行…抹掉所有內容" | corrected | For in-store, Apple says don't erase: back up, unpair Watch, sign out, then the Specialist erases after evaluation. For online, you back up and erase yourself | PREP; LEGAL |
| 19 | Once Apple takes the device you can't get data back | correct | Apple says a device handed in for recycling can't be retrieved | TI |
| 20 | Can't trade in if Apple ID/Find My not removed | softened | Per terms, the quote may be revised if Find My iPhone is not removed | LEGAL |
| 21 | Valuation factors: model, year, storage, condition | correct | Apple: condition, year and configuration | TI footnote ① |
| 22 | (new) 「未知」 parts may affect trade-in value; 「完成維修」 must be finished first | added | — | PARTS; SELL |
| 23 | Apple valuation "一般較保守", recycling shop "一般較高" (FAQ, table, pros/cons) | corrected | Unsupported. Apple's "最高達" values for several iPhones exceed the site's 256GB prices. Now "沒有固定答案，逐部比較", with a note that Apple's figures are "最高達" amounts. No figures quoted | VAL; prices.json |
| 24 | Before you go: back up, unpair Watch, sign out of Apple ID, Find My | corrected | 「Apple 帳户（前稱 Apple ID）」, first mention in the body. Per-channel erase advice as in #18 | SELL; PREP |
| 25 | "Samsung 亦有官方 Trade-in，同樣以折抵新機為主" | corrected | Samsung HK needs a new Samsung purchase but pays the old device's value by bank transfer or FPS. No generalisation of Apple's rule | SAM (coordinator-verified) |
| 26 | Site prices table and condition multipliers ×0.92 / ×0.5 | correct | Placeholders. Matches QuoteForm | src/components/QuoteForm.astro |
| 27 | Recycling shop: quote online, MTR/agreed place, 5–10 min inspection, cash/FPS | correct | Owner claims | src/components/Steps.astro; src/pages/process.astro |
| 28 | "現場有職員協助" (pro) | removed | Replaced by the verified pro "估值下調時可拒絕並取回舊機" | TI |

Coordinator facts applied: 「Apple 帳户（前稱 Apple ID）」 naming; Samsung HK cash/FPS payout; Apple HK no cash, HK-only gift card.
