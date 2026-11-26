# Topical map (pillar / cluster)

Built from: DataForSEO related keywords (HK, zh-TW, 2026-11-26) clustered with gemini-embedding-001, plus okhk.store's Ahrefs organic keywords (see `keyword-map.md`).

Rule: **money pages own model keywords.** `/iphone/<model>/`, `/samsung/`, `/ipad/`, `/macbook/` target "<型號> 回收價". Guides target informational intent and link down to money pages. A guide must not target a model keyword already owned by a model page (cannibalisation).

Topics live in `src/data/topics.json`. Each guide JSON has `topic` (topic id) and `role` (`pillar` or `cluster`). The guide page links every cluster post to its pillar and siblings, and every pillar to all of its cluster posts.

| Topic | Role | Slug | Target keyword (HK volume/month) | Supporting keywords |
|---|---|---|---|---|
| 手機回收香港 | **pillar** | hong-kong-phone-recycling-guide | 手機回收 (590), 手機回收香港 (110) | 回收手機 150, 手機回收站 150, 賣手機 90, 收手機 90 |
| | cluster | old-phone-disposal-hong-kong | 舊手機回收 (110) | 舊手機回收地點 90, 舊電話回收 90, 舊手機處理香港 40, 手機回收環保 40, 壞手機回收 30 |
| | cluster | before-selling-phone-checklist | apple 回收 流程 (40) | iphone 抹除資料, 登出 Apple ID |
| | cluster | choose-phone-recycling-shop | 二手手機店推薦 (40) | 香港二手手機店 40, 先達收機邊間好 80 |
| | cluster | sin-tat-plaza-recycle-price | 先達回收價 (6,800) | 先達回收 250, iphone 先達 350, 先達iphone 200, 先達收機 150 |
| iPhone 回收價 | **pillar** | iphone-recycle-price-trend | iphone 回收價 2026 (210), iphone回收價 (3,600) | 蘋果回收價 80, iphone 二手回收價 300 |
| | cluster | apple-trade-in-hong-kong | apple trade in (4,400) | apple trade in 價格 880, 流程 880, 經驗 110, 現場 90, 估價 50, apple 回收 320, apple 回收價 480 |
| | cluster | iphone-battery-health-recycle-price | iphone 電池健康度 回收 | 電池健康度 扣價 |
| | cluster | sealed-new-iphone-recycle-price | 全新iphone回收價 (80) | iphone 17 pro max 炒價 90, iphone 炒價 |
| | cluster | iphone-battery-replacement-price | iphone 換電池 (2,400) | iphone 換電池 價錢 880, apple 換電池 880, iphone 換電池 香港 50 |
| | cluster | iphone-18-recycle-price | iphone 18 回收價 (1,600) | series-level; model pages /iphone/iphone-18-pro(-max)/ own the model keywords |
| | cluster | iphone-17-series-recycle-price | iphone 17 回收價 (1,600) | iphone air 回收價 170; series comparison; model pages own "iPhone 17 Pro Max 回收價" (1,600) |
| | cluster | hk-vs-grey-import-iphone | 行貨 水貨 分別 (590) | 水貨 iphone 20, iphone 水貨 行貨 10 |
| | cluster | iphone-cracked-screen-sell-or-repair | iphone 爆mon (210) | iphone 換 mon 價錢 110, 爆mon iphone 回收 10, 壞手機回收價 10 |
| 二手 iPhone | **pillar** | second-hand-iphone-price-guide | 二手iphone (1,600) | 二手手機 1,300, 二手電話 400, 二手iphone價格 260, 二手iphone哪裡買 170, 二手手機買賣平台 100, 二手iphone注意 30 |
| | cluster | second-hand-phone-platforms | 二手手機買賣平台 (260) | 二手iphone哪裡買 170 |
| Samsung 回收 | **pillar** | samsung-trade-in-vs-recycling | samsung trade in (1,300) | 三星回收價格表 170, samsung回收 50, samsung 手機 回收 價 50 |
| iPad、MacBook 及 Apple Watch | **pillar** | ipad-macbook-recycling-guide | ipad 回收 (210), macbook回收 (170) | ipad 回收 香港 40, macbook 回收 價格 30 |
| | cluster | apple-watch-recycle | apple watch 回收價 (170) | apple watch 回收 110 |

Not targeted: macbook 維修 (repair service, not offered), airpods 回收 110 / airpods trade in 100 (no AirPods category yet).

Keyword volumes for the 2026-11-26 additions: DataForSEO Google Ads search volume, Hong Kong.

Next candidates once the site has traffic data: iPhone sell-timing post (split from the iPhone pillar if it grows), Z Fold / Z Flip foldable recycling post (no measurable volume yet), AirPods recycling (needs an AirPods price category first).
