# Fact-check log: hong-kong-phone-recycling-guide

Checked 2026-11-25/26. Verdicts: correct / corrected / softened / removed. "Owner" means the business's own claim (Steps.astro, process.astro, QuoteForm.astro). Those were kept consistent with the site and not checked against outside sources.

| # | Claim (where) | Verdict | Change / note | Source |
|---|---|---|---|---|
| 1 | 想拿「最高」現金價首選回收店 (intro, summary) | softened | Changed to 「想即日收現金」 plus same-day comparison. No data shows shops always pay the most | prices.json (owner data only) |
| 2 | Official Trade In 「多數只可折抵新機或換成禮品卡」 (summary, table, H2, FAQ 5) | corrected | Official trade-in usually needs a new purchase from that brand. Apple pays as purchase credit or an Apple Store gift card; Samsung HK pays by bank transfer/FPS | https://www.apple.com/hk/trade-in/ ; https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/ |
| 3 | 「需要現金就排除官方 Trade In」 (3-question list) | corrected | Now 「你本身會不會買同品牌新機？」. Samsung pays cash-equivalent | same as #2 |
| 4 | Trade In 「價錢通常較低」/回收店「通常較高」 (table, FAQ 1, H2) | softened | Now 「視乎型號及當時優惠，宜同日比較」. No official comparison exists | — (market claim, unverifiable) |
| 5 | 容量越大越高價 (factor table) | corrected | prices.json shows iPhone 12 64GB above 128GB, so wording is now 「一般…個別舊型號未必按大小排列」 | src/data/prices.json |
| 6 | Battery 「90% 以上最理想；低於 85% 會扣價」 (table, product table) | corrected | QuoteForm already deducts at 85–89%, so the text now says deductions start below 90% and go up in steps | src/components/QuoteForm.astro |
| 7 | New iPhones launch each September; older models then drop | correct (general tendency) | Kept as 「通常」 | content brief (well-known fact) |
| 8 | Samsung flagships launch 「年初」 | corrected (made precise) | 「Galaxy S 旗艦系列近年一般在每年 1 至 2 月發布」 (S24 Jan 2024, S25 Jan 2025, S26 25 Feb 2026) | https://www.sammobile.com/news/galaxy-s26-launch-samsung-confirms-february-25-unpacked-event/ |
| 9 | Model/storage path 「設定」>「一般」>「關於本機」 | correct | — | https://support.apple.com/zh-hk/108044 |
| 10 | Battery health 「設定」>「電池」 | softened | Now 「電池內的電池健康度頁面（名稱因 iOS 版本略有不同）」. Label differs by version | https://support.apple.com/en-sa/101575 |
| 11 | Samsung battery check via Samsung Members | correct | Clarified as the Members app diagnostics | https://www.samsung.com/sa_en/support/mobile-devices/how-to-check-the-battery-status-on-your-samsung-galaxy-phone/ |
| 12 | 「較新的 iOS 會在關於本機顯示零件及維修記錄」 | corrected | Uses the official name 「零件和維修記錄」. It only appears if the iPhone has been repaired (iOS 15.2+) | https://support.apple.com/zh-hk/109511 ; https://support.apple.com/102658 |
| 13 | Apple ID naming | corrected | First mention is 「Apple 帳户（前稱 Apple ID）」, then 「Apple 帳户」 | https://support.apple.com/zh-hk/109511 (coordinator: support.apple.com/en-mo/HT201355) |
| 14 | Erase path 「抹掉所有內容和設定」 | corrected | Now uses the HK term 「清除所有內容和設定」 (Android: 原廠資料重設) | https://support.apple.com/zh-hk/109511 |
| 15 | Account sign-out releases Activation Lock / FRP (prep table) | correct (reworded) | 「避免啟用鎖或原廠重設保護鎖機」 | https://support.apple.com/zh-hk/109511 ; https://support.google.com/android/answer/9459346?hl=zh-Hant |
| 16 | Unpair Apple Watch before selling | correct | Uses the HK term 「取消配對」 | https://support.apple.com/zh-hk/guide/watch/apd4ad3571d9/watchos |
| 17 | 綠在區區 accepts phones (「先查該站是否接收手機」) | corrected | The official FAQ lists mobile phones as accepted small electrical appliances, so text says to check opening hours | https://wastereduction.gov.hk/en-hk/recycling-faq/greencommunity-faq |
| 18 | Apple recycles devices with no value for free | correct | Reworded to 「不符合換購資格的裝置」 | https://www.apple.com/hk/trade-in/ |
| 19 | 「電訊商／門市回收箱」 | removed | Could not verify any current telco programme | — |
| 20 | Dead phone: computer reset or iCloud/Google 「尋找」 remote erase | corrected | Now names iCloud.com 「尋找裝置」, Google 「尋找中心」 (renamed from Find My Device) and Samsung Find | https://support.apple.com/zh-hk/109511 ; https://www.android.com/intl/zh-TW_tw/learn-find-hub/ ; https://www.samsung.com/hk/support/apps-services/what-is-find-my-mobile |
| 21 | Lithium battery fire risk; don't bin phones | correct (general safety) | — | https://www.wastereduction.gov.hk/zh-hk/waste-reduction-programme/rechargeable-battery-recycling-programme |
| 22 | 「正規回收從不需要先付按金」 | softened | 「一般不會要求…遇到要提高警覺」 | — (advice) |
| 23 | 先達廣場 is a phone trading hub; prices vary | correct (general) | Place name kept | — |
| 24 | Process: online quote, MTR/agreed place, 5–10 min inspection, cash/FPS, about 15 min | owner | Kept consistent | src/components/Steps.astro ; src/pages/process.astro |
| 25 | Inspection items (screen, Face ID, camera…) | owner | Kept | src/pages/process.astro |
| 26 | Prices / {{date}} placeholders | owner | Not fact-checked | src/data/prices.json |
| 27 | Prices fall over time; sell early | softened (general tendency) | Kept with 「一般／有機會」 | — |
| 28 | Battery advice 「跌到維修水平前出售」 | corrected | 「跌入下一個扣價級數（例如跌穿 90%）前」, in line with QuoteForm | src/components/QuoteForm.astro |
| 29 | Samsung deductions: screen burn-in, green line, account not removed | correct | Samsung trade-in FAQ also rejects devices whose accounts or locks aren't removed | https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/ |
| 30 | Second-hand platform risks (fake notes, scams) | correct (general advice) | — | — |

Note outside this file: `src/pages/process.astro` still says 「傳輸或重置 iPhone」>「抹掉所有內容和設定」 and 「Apple ID」. The current HK wording is 「轉移或重設 iPhone」>「清除所有內容和設定」. That file was not edited because it is out of scope.
