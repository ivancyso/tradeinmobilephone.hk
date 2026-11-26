# Fact-check log: computer-recycling-hong-kong

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json; every variant used is non-null). weee.gov.hk returned 503 / timed out to plain fetch, so its pages were read in a rendered browser on 2026-11-26.

Sources:
- WEEE-FAQ = https://weee.gov.hk/tc/i-am-a-consumer/frequently-asked-questions/
- WEEE-REG = https://weee.gov.hk/tc/background/regulatory-measures/
- WEEE-BUY = https://weee.gov.hk/tc/i-am-a-consumer/purchasing-ree/
- WEEE-OTHER = https://weee.gov.hk/tc/i-am-a-consumer/other-proper-recycling-channels/
- WEEE-PARK = https://weee.gov.hk/tc/background/weee-park-weee-treatment-and-recycling-facility/
- GC-FAQ = https://www.wastereduction.gov.hk/zh-hk/recycling-faq/greencommunity-faq
- MS-RESET = https://support.microsoft.com/zh-hk/windows/experience/backup-recovery/reset-your-pc (重設您的電腦)
- MS-SELL = https://support.microsoft.com/zh-hk/accounts-billing/security/before-you-recycle-sell-or-gift-your-xbox-or-windows-pc
- MS-BITLOCKER = https://support.microsoft.com/zh-hk/windows/security/encryption/find-your-bitlocker-recovery-key
- MAC-ERASE = https://support.apple.com/zh-hk/102664 (清除 Mac 並重設為出廠設定, 發佈日期 2026-09-28)
- MAC-ID = https://support.apple.com/zh-hk/102869 ; https://support.apple.com/zh-hk/108052 (分辨 MacBook Air / Pro 型號)
- PILLAR-LOG = docs/fact-check/ipad-macbook-recycling-guide.md

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Regulated "電腦" includes 個人電腦、桌上電腦、平板電腦、手提電腦及筆記簿電腦 | verified (WEEE-REG definition list; also 「電腦（包括桌上、手提及平板電腦）」) | WEEE-REG |
| 2 | 列印機 ≤30 kg, multifunction copier/fax/scanner still counts as printer; 掃描器 ≤30 kg; 顯示器 no storage/computing, 5.5–100 吋 | verified | WEEE-REG |
| 3 | Ten classes of REE: 空調機、電冰箱、洗衣機、乾衣機、抽濕機、電視機、電腦、列印機、掃描器、顯示器 | verified | WEEE-FAQ Q1; WEEE-REG; GC-FAQ Q16 |
| 4 | Scheme fully implemented 1 Aug 2018; enhanced scheme (adds 乾衣機、抽濕機, wider scope) from 1 Jul 2024 | verified | WEEE-FAQ Q2; WEEE-REG |
| 5 | Phones are not REE | verified by the REE list (no phones); consistent with old-phone-disposal log #9 | WEEE-REG |
| 6 | Statutory removal: when buying REE, seller must on request remove one old item of the same class free from the consumer's designated premises | verified | WEEE-BUY; WEEE-REG |
| 7 | Seller must contact the designated collector; consumer need not contact the operator | verified (Q9: 「銷售商有法定責任為顧客聯絡…指定收集者」) | WEEE-FAQ Q9 |
| 8 | Same-day delivery + removal at no extra charge if delivery is on the 3rd working day after purchase or later | verified | WEEE-FAQ Q10 (also Q5, WEEE-BUY) |
| 9 | Without buying new: hotline 2676 8888 / WhatsApp 6081 5096, free door-to-door collection by WEEE·PARK operator; statutory removal has priority; about one week at current booking position | verified | WEEE-FAQ Q7, Q8; WEEE-OTHER |
| 10 | 綠在區區 accepts 四電一腦 at its collection points; items passed to WEEE·PARK | verified | WEEE-OTHER; GC-FAQ Q1 |
| 11 | Old item should be placed separately, detached from installations/connections | verified (Q12(a)) | WEEE-FAQ Q12 |
| 12 | Hotline and door-to-door collection suspended under No. 8 signal or above or Black Rainstorm | verified | WEEE-FAQ Q14 |
| 13 | EPD enquiry hotline 2838 3111 | verified | WEEE-FAQ Q15 |
| 14 | Landfills and designated facilities (e.g. transfer stations) no longer accept electrical waste | verified (from 31 Dec 2018) | WEEE-REG |
| 15 | WEEE·PARK in 屯門環保園; refurbishes working appliances into 「再生電器」 for families in need | verified | WEEE-PARK |
| 16 | "Do not assume recycling channels will wipe your data" | advice, no official statement on data wiping found (same wording policy as old-phone-disposal log #10) | — |
| 17 | 綠在區區 small appliances include 電腦硬碟, USB 線, 電線 | verified (GC-FAQ Q18) | GC-FAQ |
| 18 | Windows reset: back up; if encrypted ensure you have the BitLocker recovery key | verified | MS-RESET |
| 19 | Windows 11: 「設定」app >「系統」> 復原設定 >「復原選項」>「重設電腦」; Windows 10: 「更新與安全性」>「復原」>「重設此電腦」>「開始使用」 | verified. Note: MS zh-hk page renders the menu as 「系統>修復」 but the setting is named 「復原」 (「開啟您的 [復原] 設定」), so the post says 「系統」內開啟「復原」 | MS-RESET; MS-SELL |
| 20 | 「移除所有項目」 removes all personal files, apps and settings; suits giving away or selling | verified | MS-RESET |
| 21 | 「清除資料」 option removes files and cleans the drive, harder to recover, recommended when donating/recycling/selling, takes time | verified | MS-RESET |
| 22 | Screen may go black for a long time (sometimes >15 min), device may restart; don't restart manually | verified | MS-RESET |
| 23 | Data-cleaning feature is for consumers and doesn't meet government/industry data-erasure standards | verified | MS-RESET |
| 24 | BitLocker recovery key may be backed up to the Microsoft account; for work/school devices the key may be in the organisation's account, ask IT | verified | MS-BITLOCKER |
| 25 | After reset, remove device at account.microsoft.com/devices (顯示詳細資料 > 其他動作 > 移除, tick 我已準備好移除此裝置), then 取消連結 so it doesn't count toward the Microsoft Store device limit | verified | MS-SELL |
| 26 | Desktop drives are usually easier to remove; recent MacBooks and many thin laptops have SSDs that generally can't be removed by the user; a computer without its drive usually can't be sold at a normal price | general (Apple silicon MacBook storage is on the logic board; worded 「一般」), see also PILLAR-LOG #22 | — |
| 27 | Mac: Time Machine backup; sign out 「系統設定」>［你的姓名］>「登出」; turn off 「尋找我的 Mac」 (Activation Lock); iMessage; iTunes deauthorise on Mojave or earlier | verified (reused) | PILLAR-LOG #31–34 |
| 28 | 「清除所有內容和設定」 needs macOS Monterey 12+ and Apple silicon or T2; path 「系統設定」>「一般」>「轉移或重設」>「清除所有內容和設定」 | verified 2026-11-26 | MAC-ERASE |
| 29 | To keep factory state for sale, don't use Setup Assistant; hold the power button until it shuts down | verified | MAC-ERASE |
| 30 | Other Intel Macs: 「macOS 還原」 + 「磁碟工具程式」 + reinstall; turn off firmware password in macOS Recovery | verified (reused) | PILLAR-LOG #28, #31 |
| 31 | Apple Trade In: devices not eligible for credit are recycled free | verified (reused; MAC-ERASE also says Apple can recycle any Mac 「不論裝置的型號或狀況」) | old-phone-disposal log #7; MAC-ERASE |
| 32 | Mac model name: Apple menu >「關於此 Mac」 | verified (HK wording) | MAC-ID |
| 33 | Apple silicon MacBooks generally price above same-period Intel models | price data | src/data/prices.json; PILLAR-LOG #18 |
| 34 | Site lists Intel MacBooks 2017–2020 | correct | src/data/prices.json |
| 35 | Site lists no Windows laptop prices; quote via /contact/ | correct (prices.json categories: iphone, samsung, ipad, macbook only) | src/data/prices.json |
| 36 | Damaged/unbootable MacBook needs separate assessment; company devices with 「遠端管理」 must be released by the organisation | reused | PILLAR-LOG #15; pillar body |
| 37 | Own service claims (online quote, MTR or agreed place, 5–10 min inspection, cash/FPS) | consistent | src/components/Steps.astro |

Not stated (could not verify or not needed): number of 綠在區區 points (sources disagree, see old-phone-disposal log #4); whether every 綠在區區 point (e.g. 回收流動點) takes large items, so the post tells readers to check the point's categories; status of the older Computer and Communication Products Recycling Programme in 2026 (not mentioned); minimum quantity for hotline collection (not mentioned).
