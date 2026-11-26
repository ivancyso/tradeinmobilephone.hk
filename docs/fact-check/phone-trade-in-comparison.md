# Fact-check: phone-trade-in-comparison

Checked 2026-11-26 (publishedAt/updatedAt 2026-11-26). No promo dollar amounts and no official fees (HK$) quoted. Recycling prices are placeholders (iphone-16-pro/256GB, iphone-15/128GB, galaxy-s25-ultra/256GB, all non-null; ×0.92 = site's 90% condition multiplier, as in apple-trade-in-hong-kong).

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Apple Trade In: online or Apple Store; value as purchase credit or equal-value Apple Store gift card; no cash | correct (reused, consistent with apple-trade-in-hong-kong log) | https://www.apple.com/hk/trade-in/ ; https://www.apple.com/hk/shop/gift-cards |
| 2 | Apple accepts smartphones, tablets, computers, Watch; Android phones can be traded in for a new iPhone | correct (reused) | https://www.apple.com/hk/trade-in/ ; https://www.apple.com/hk/iphone/ |
| 3 | Apple online trade-in usually 2–3 weeks; if value lowered you can decline and get the device back | correct (reused) | https://www.apple.com/hk/trade-in/ ; https://www.apple.com/legal/sales-support/trade-in/hk/ |
| 4 | Samsung HK Trade-in: must buy new Samsung device; online valuation; final check at Samsung Experience Store; paid by bank transfer/FPS to HK bank account in 2–3 working days | correct (re-fetched 2026-11-26) | https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/ |
| 5 | Samsung accepted brands: per official eligible list | correct (page does not list brands) | same as #4 |
| 6 | Samsung: devices with accounts/locks not removed are ineligible | correct | same as #4 |
| 7 | csl/1O1O have a Trade-in price lookup by category/brand/model (phones, tablets, smartwatches, earphones); latest price at csl shops / customer service | correct | https://www.hkcsl.com/tc/handset-trade-in-price/ |
| 8 | 1O1O deducts the trade-in price from the new device's Trade-in exclusive price; exclusive price needs a contract/designated plan | correct (page: sign contract, designated plan, min 12 bill months — post says only "簽約上台及使用指定月費計劃") | https://www.1010.com.hk/tc/handset_tradein_price_list |
| 9 | csl terms: battery included, working normally; non-original/modified not accepted; price adjusted by damage; rebate for trade-in + designated phone on contract credited on 2nd bill | correct | https://www.hkcsl.com/tc/handset-trade-in-price/ ; https://www.1010.com.hk/tc/handset_tradein_price_list |
| 10 | csl "Restart 3.0" is a device protection/replacement service (bolttech), not a trade-in | noted, **not used** in post | https://www.hkcsl.com/tc/restart/ |
| 11 | 3HK: online estimate → book 3Shop → bring confirmation email and phone; online price is the highest, final price by staff inspection; valid 5 days from assessment | correct | https://www.three.com.hk/3Care/chi/handsetTradein/trade_in.jsp (redirect from https://web.three.com.hk/handsets/offer/handsetexpert/index.html) |
| 12 | 3HK: trade in + buy designated model = handset discount; free data transfer and home pickup; recycled devices never returned | correct | same as #11 |
| 13 | SmarTone: recycle value received by FPS, credited to account, or offset against designated phone/tablet | correct (official terms, via search extract — smartone.com returns 403 to direct fetch) | https://www.smartone.com/tc/mobile_and_price_plans/handsets/handset_trade_in.jsp |
| 14 | SmarTone Trade-in rebate: postpaid customers, recycle within 90 days of buying designated model, credited after 14 working days | correct (same caveat) | same as #13 |
| 15 | SmarTone iPhone offer page: extra trade-in discount valid until 2026-12-31 | correct per search extract of official page; amount not quoted | https://www.smartone.com/service-site/iPhone18/jsp/tchinese/offer.jsp |
| 16 | SmarTone: device must have battery and work; not returned after completion | correct (same caveat) | same as #13 |
| 17 | CMHK 「Trade in 以舊換新計劃」: designated phones, tablets, smartwatches, earphones; ask at shops; value only for buying a new device, not cash/other products; adjusted by damage | correct (official page via search extract — direct fetch returned HTTP 466) | https://www.hk.chinamobile.com/tc/home/customer-service/handsettradein ; https://www.hk.chinamobile.com/tc/handsettradein.html |
| 18 | CMHK latest eligible-models PDF dated May 2026 | correct | https://www.hk.chinamobile.com/upload/onlineshop/2026-05-21/2026-05-18_CMHK_Trade-in_Eligible_Models.pdf |
| 19 | Carrier pages: users must delete their own data; carriers not liable for data loss | correct (csl, 3HK, SmarTone terms) | #9, #11, #13 sources |
| 20 | "Carrier trade-in mostly needs in-store inspection" | correct for 3HK (3Shop), SmarTone (designated shops), csl/CMHK (shops); worded "一般" | #7–#17 |
| 21 | Apple "最高達" values; 3HK online price is "最高" | correct | https://www.apple.com/hk-zh/shop/browse/overlay/tradein_landing/iphone_values ; #11 |
| 22 | Recycling shop: no new purchase, 5–10 min inspection, cash/FPS, can take phone back if price not accepted | consistent with site's own claims | src/components/Steps.astro; src/pages/process.astro; choose-phone-recycling-shop |
| 23 | Prep: Apple path 「設定」>「一般」>「轉移或重設 iPhone」>「清除所有內容和設定」; 「Apple 帳户（前稱 Apple ID）」 | correct | docs/content-brief.md |
| 24 | Promo dollar amounts (e.g. carrier extra discounts) | **left out** by rule | — |

Could not verify by direct page load: SmarTone (403) and CMHK (466) pages — facts taken from search-engine extracts of the official URLs above. Carrier accepted-brand lists not enumerated (pages use dynamic selectors / PDFs); post says "以各電訊商名單為準".
