# Fact-check log: old-phone-disposal-hong-kong

| # | Claim (where) | Verdict | Change / note | Source |
|---|---|---|---|---|
| 1 | iPhone 8 64GB still has a price | correct | Placeholder from owner data | src/data/prices.json |
| 2 | 「仍獲主要系統更新支援的型號，通常都有回收價」 | corrected | iPhone 8 (2017) gets no current major iOS yet is priced, while iPhone 11 64/128GB show null. Text now points to the price table and notes 「查詢報價」 cases | src/data/prices.json |
| 3 | Table: 「推出約五至六年內」 still has value | corrected | Now 「價格表上查到報價」 | src/data/prices.json |
| 4 | 綠在區區 「全港逾 430 個收集點」 | removed number | Sources disagree: the official FAQ gives 12 stations, 83 stores and about 600 spots; another FAQ copy and press reports give different numbers. Now 「全港各區設有回收環保站、回收便利點及回收流動點」 | https://wastereduction.gov.hk/en-hk/recycling-faq/greencommunity-faq |
| 5 | 綠在區區 accepts phones / small appliances | correct (strengthened) | The official FAQ lists mobile/landline phones; it also accepts household rechargeable batteries | https://wastereduction.gov.hk/en-hk/recycling-faq/greencommunity-faq |
| 6 | 環保署充電池公眾回收點 「只收電池」, not whole phones | correct (renamed) | Now 「充電池回收計劃收集點」: accepts Li-ion/NiMH/NiCd; remove the battery from the device first | https://www.wastereduction.gov.hk/zh-hk/waste-reduction-programme/rechargeable-battery-recycling-programme |
| 7 | Apple recycles no-value devices free | correct | 「不符合換購資格的裝置」 | https://www.apple.com/hk/trade-in/ |
| 8 | 電訊商／門市回收箱 | softened | 「部分門市可能設有…事先向門市查詢」. Unverified | — |
| 9 | 「四電一腦」 scheme 「只涵蓋」 5 categories, not phones | corrected | Lists air conditioners, fridges, washing machines, TVs, and computers, printers, scanners and monitors. Adds dehumidifiers and tumble dryers from 1 Jul 2024. Still excludes phones | https://www.gov.hk/tc/residents/environment/waste/reduction/wasteredrecyc.htm ; https://aud.gov.hk/pdf_ca/c83ch03sum.pdf |
| 10 | 「環保回收點不會替你清資料」 | softened | 「不要指望回收點會代你清除資料」. No official statement found | — |
| 11 | Android FRP: 「未移除 Google 帳戶就重設，開機後會要求輸入原帳戶密碼」 | corrected | FRP triggers on a reset done outside Settings (e.g. recovery mode); old screen lock may also verify; Samsung asks for the Samsung account password on a Settings reset | https://support.google.com/android/answer/9459346?hl=zh-Hant ; https://www.samsung.com/hk_en/support/mobile-devices/perform-a-factory-reset-on-samsung-galaxy-device/ |
| 12 | Account-locked phones can't be bought; use the official reset | correct | Apple ID is now 「Apple 帳户（前稱 Apple ID）」 | https://support.apple.com/zh-hk/109511 |
| 13 | iPhone sign-out 「設定」> 名稱 > 最底「登出」 | correct | — | https://support.apple.com/zh-hk/109511 |
| 14 | Erase 「傳輸或重置 iPhone」>「抹掉所有內容和設定」 | corrected | 「轉移或重設 iPhone」>「清除所有內容和設定」 | https://support.apple.com/zh-hk/109511 |
| 15 | Wallet/Octopus: 「避免餘額留在舊機」 | corrected | Octopus says remove it on the old iPhone, then re-add on a new iPhone signed in to the same Apple 帳户 | https://www.octopus.com.hk/tc/consumer/customer-service/faq/apple-pay/get.html |
| 16 | Dead phone remote erase via iCloud/Google 「尋找」 | corrected | iCloud.com 「尋找裝置」; Google 「尋找中心」; Samsung Find | https://support.apple.com/zh-hk/109511 ; https://www.android.com/intl/zh-TW_tw/learn-find-hub/ ; https://www.samsung.com/hk/support/apps-services/what-is-find-my-mobile |
| 17 | Model path 「關於本機」/「關於手機」 | correct | — | https://support.apple.com/zh-hk/108044 |
| 18 | Water-damaged / dead phones usually have no resale value | correct (general, owner) | — | src/components/QuoteForm.astro (damage option) |
| 19 | 「有損壞／爆屏」 option on the quote form | correct | Matches the form option | src/components/QuoteForm.astro |
| 20 | Don't dry phones in an oven or with fire | correct (general safety) | — | — |
| 21 | Swollen battery: stop charging, don't remove it yourself | correct (softened) | Added 「先向回收點查詢是否接收」 | https://www.wastereduction.gov.hk/zh-hk/waste-reduction-programme/rechargeable-battery-recycling-programme |
| 22 | Chargers and cables are small appliances | correct | The 綠在區區 FAQ lists USB and power cables | https://wastereduction.gov.hk/en-hk/recycling-faq/greencommunity-faq |
| 23 | Power banks go to battery collection points | softened | Not named on RBRP (it lists "external chargers"). Now 「交出前先向收集點確認」 plus taping terminals (official advice) | https://www.wastereduction.gov.hk/zh-hk/waste-reduction-programme/rechargeable-battery-recycling-programme |
| 24 | Lithium battery fire risk; metals recovered | correct (general) | — | same |
| 25 | Prices fall over time | softened (tendency) | Kept with 「一般」 | — |
| 26 | Handover at an MTR station, on-the-spot inspection | owner | Kept | src/components/Steps.astro |
