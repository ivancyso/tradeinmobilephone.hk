# Fact-check log: apple-watch-recycle

Checked 2026-11-26. Apple pages read in zh-HK (support.apple.com/zh-hk, apple.com/hk).

| # | Claim (where) | Verdict | Change / note | Source |
|---|---|---|---|---|
| 1 | The site lists no Apple Watch reference prices; readers submit details via /contact/ (intro, FAQ, summary) | correct | `prices.json` has no Watch category, so the post has no price placeholders. /contact/ shows email only (`site.whatsapp` is empty), so the post says 「以電郵提交」 | src/data/prices.json ; src/data/site.json ; src/pages/contact.astro |
| 2 | Current lineup is Series 12, Ultra 4 and SE 3 | correct | — | https://www.apple.com/hk/watch/ |
| 3 | Series 12: 42 or 46 mm; aluminium, titanium or 精密陶瓷 | correct | — | https://www.apple.com/hk/watch/compare/ ; https://www.apple.com/hk/apple-watch-series-12/specs/ |
| 4 | Ultra 4 (and Ultra–Ultra 3): 49 mm titanium only, GPS + 流動網絡 only | correct | Compare page: 「支援流動網絡」 (not 「可選」) for every Ultra | https://www.apple.com/hk/watch/compare/ ; https://support.apple.com/zh-hk/108056 |
| 5 | SE 3: 40 or 44 mm aluminium | correct | — | https://support.apple.com/zh-hk/108056 |
| 6 | Series 10 and 11: 42/46 mm, aluminium or titanium | correct | — | https://www.apple.com/hk/watch/compare/ |
| 7 | Series 7–9: 41/45 mm, aluminium or stainless steel; Series 7 also titanium | correct | — | https://www.apple.com/hk/watch/compare/ |
| 8 | Stainless steel only on Series 9 and earlier; titanium from Series 10 | correct | Worded as what Apple's compare data shows, not as an Apple statement | https://www.apple.com/hk/watch/compare/ |
| 9 | Recent stainless steel, titanium and ceramic versions are GPS + 流動網絡 only | correct | 108056 lists steel (Series 3–9), titanium (Series 10–12) and Series 12 ceramic only under 「GPS + 流動網絡」 | https://support.apple.com/zh-hk/108056 |
| 10 | Glass: titanium/ceramic use sapphire; aluminium generally Ion-X; Series 12 aluminium uses 陶瓷晶體護面 2 | correct | Dropped an unsourced claim that glass type affects how much it scratches | https://support.apple.com/zh-hk/108056 ; https://www.apple.com/hk/apple-watch-series-12/specs/ |
| 11 | Case size and other details are engraved on the case back | correct | 「請查看 Apple Watch 背面的刻字」 | https://support.apple.com/zh-hk/108056 |
| 12 | Model number: Watch app 「我的手錶」>「一般」>「關於本機」>「型號號碼」; M part number, tap for the A model number | correct | — | https://support.apple.com/zh-hk/108056 |
| 13 | Battery: on the watch 「設定」>「電池」>「電池健康度」, scroll to 「最大容量」; the watch alerts you when capacity drops a lot | correct | Exact zh-HK path confirmed. No % threshold given (Apple HK gives none) | https://support.apple.com/zh-hk/guide/watch/apd24c6cb2dd/watchos |
| 14 | Batteries lose capacity with chemical age | correct | — | https://support.apple.com/zh-hk/105080 |
| 15 | Series 12 box: band and 磁力快速充電器至 USB-C 連接線 | correct | Written as 「以 Series 12 為例」 | https://www.apple.com/hk/apple-watch-series-12/specs/ |
| 16 | Unpair: Watch app 「我的手錶」>「所有 Apple Watch」> 資料按鈕 >「取消配對 Apple Watch」, then confirm; watch next to the iPhone | correct | — | https://support.apple.com/zh-hk/102542 |
| 17 | Unpairing erases the watch, removes it from the Apple 帳户 and removes 「啟用鎖」 | correct | — | https://support.apple.com/zh-hk/guide/watch/apd4ad3571d9/watchos |
| 18 | Apple 帳户 password is entered to turn off 「啟用鎖」 during unpair | correct | — | https://support.apple.com/zh-hk/102542 |
| 19 | iPhone tries to back up the watch when unpairing; the watch also backs up to the paired iPhone automatically | correct | — | https://support.apple.com/zh-hk/102542 ; https://support.apple.com/zh-hk/108358 |
| 20 | The Apple Watch backup does not include Apple Pay cards | correct | — | https://support.apple.com/zh-hk/108358 |
| 21 | Erasing removes Apple Pay payment cards, photos, contacts and so on | correct | — | https://support.apple.com/zh-hk/102542 |
| 22 | Cellular: tap 「移除流動網絡計劃」 and contact the carrier to cancel, or it may keep charging | correct | — | https://support.apple.com/zh-hk/102542 ; https://support.apple.com/zh-hk/102573 |
| 23 | If the passcode screen or home screen still shows, the watch is not erased | correct | — | https://support.apple.com/zh-hk/102542 |
| 24 | No iPhone or watch already handed over: iCloud.com 「尋找」>「所有裝置」> watch >「清除 Apple Watch」>「下一步」, then remove it with the X/移除 button | correct | — | https://support.apple.com/zh-hk/102542 ; https://support.apple.com/zh-hk/102573 |
| 25 | On-watch erase 「設定」>「一般」>「重設」>「清除所有內容和設定」 keeps the pairing and does not remove Activation Lock | correct | Apple: Activation Lock still works after a remote erase, and only unpairing turns it off | https://support.apple.com/zh-hk/guide/watch/apd4ad3571d9/watchos ; https://support.apple.com/zh-hk/102573 |
| 26 | With Activation Lock on, unpairing, pairing a new iPhone or turning off 「尋找」 needs the owner's Apple 帳户 and password; it turns on automatically with 「尋找」 | correct | — | https://support.apple.com/zh-hk/102573 |
| 27 | Check: 「尋找我的 Apple Watch」 under the info button means Activation Lock is on; a prompt for the previous owner's password at pairing means it is still on | correct | — | https://support.apple.com/zh-hk/102573 ; https://support.apple.com/zh-hk/102542 |
| 28 | A locked watch can't be used by a new owner, so a recycling shop can't buy it | correct (general) | We dropped the claim that Apple refuses locked watches: no Apple HK source found | https://support.apple.com/zh-hk/102542 |
| 29 | Octopus: Watch app 「銀包與Apple Pay」 can move Octopus from the watch to the iPhone | correct | — | https://www.octopus.com.hk/tc/consumer/customer-service/faq/apple-pay/manage.html |
| 30 | Octopus: when you sign out or reset an online device, Octopus is removed and backed up automatically, and you re-add it on the same Apple 帳户 | correct | Our advice to move it yourself first is labelled as advice | https://www.octopus.com.hk/tc/consumer/customer-service/faq/apple-pay/manage.html |
| 31 | Apple Trade In HK covers Watch (categories: 智能電話, 平板電腦, 電腦, Watch) | correct | — | https://www.apple.com/hk/trade-in/ |
| 32 | Trade In value goes to purchase credit or an Apple Store gift card, never cash | correct | No amounts quoted | https://www.apple.com/hk/trade-in/ ; https://www.apple.com/hk/watch/ (footnote) |
| 33 | Trade In value depends on condition, year and configuration; final value follows inspection | correct | — | https://www.apple.com/hk/trade-in/ |
| 34 | Ineligible devices of any model or condition are recycled free by Apple | correct | — | https://www.apple.com/hk/trade-in/ |
| 35 | Serial number needed for an accurate Watch value; on the watch 「設定」>「一般」>「關於本機」 | correct | — | https://www.apple.com/hk/trade-in/ |
| 36 | Online trade-in: send the old device within 14 days of receiving the new one | correct | — | https://www.apple.com/hk/trade-in/ |
| 37 | Accessories (boxes, chargers, cables, cases, straps) may be sent with the trade-in for recycling but are not required | correct | — | https://www.apple.com/hk/trade-in/ |
| 38 | Ultra is positioned for outdoor and sport | correct | Apple calls it 「終極運動及歷險手錶」 | https://www.apple.com/hk/watch/ |
| 39 | Larger size, cellular, titanium and newer series generally get higher resale value; the previous generation drops after a new launch | general tendency | Written as 一般／通常. No statistics | — |
| 40 | Own service claims (online quote, MTR or agreed place, 5–10 min inspection, cash/FPS) | consistent | — | docs/content-brief.md ; src/pages/process.astro |
| 41 | Apple HK wording: 「Apple 帳户（前稱 Apple ID）」 on first body mention; 「取消配對 Apple Watch」 | correct | — | docs/content-brief.md ; https://support.apple.com/zh-hk/102542 |

Not verified, so left out or kept general: an Apple Watch battery-capacity threshold for service (no zh-HK figure), Apple Watch battery replacement fees, whether Apple Trade In refuses an Activation-Locked watch, and price differences between case sizes (written as a general tendency).
