# Fact-check log: imei-check

Checked 2026-11-26. Recycling prices are placeholders only (src/data/prices.json; all variants used are non-null). No official fees are quoted in this post. Business claims (online quote, MTR or agreed-place handover, 5–10 min inspection, cash/FPS) are the site's own and match src/pages/process.astro.

Sources:
- FIND = https://support.apple.com/zh-hk/108037 (找出 iPhone、iPad 或 iPod touch 的序號、EID 或 IMEI, 發佈日期 2026-05-26); copy tip from https://support.apple.com/en-us/108037
- SAM = https://www.samsung.com/hk/support/mobile-devices/how-to-find-phone-model-number-serial-number-or-imei-number
- GSMA = https://www.gsma.com/services/device/tac-allocation ; https://www.gsma.com/get-involved/working-groups/fraud-security-group/imei
- COV = https://support.apple.com/zh-hk/HT5690 (找出有關保養或 AppleCare 服務計劃的資料, 發佈日期 2026-07-20); https://checkcoverage.apple.com/hk/zh
- ALOCK = https://support.apple.com/zh-hk/108794 (iPhone 和 iPad 的「啟用鎖」, 發佈日期 2026-05-04)
- ALREM = https://www.macrumors.com/2017/01/29/apple-removes-activation-lock-status-checker/ (secondary)
- LCQ = https://www.info.gov.hk/gia/general/201206/06/P201206060280.htm (LCQ9: Theft and snatching of mobile phones, 2012-06-06)
- CARRIER = https://support.apple.com/zh-hk/109316 (如何解鎖 iPhone 以使用不同的網絡供應商, 發佈日期 2026-01-26)
- FINDMY = https://support.apple.com/zh-hk/126302 (「尋找」功能: 遺失模式)
- PARTS = https://support.apple.com/zh-hk/102658
- ERASE = https://support.apple.com/zh-hk/109511

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | IMEI is a 15-digit device identifier: 8-digit TAC (make/model, allocated by GSMA) + serial + 1 check digit | verified | GSMA |
| 2 | Serial number is assigned by the brand and used for warranty / AppleCare / repair | verified (Apple uses serial for coverage check and support) | FIND; COV |
| 3 | IMEI/serial stay with the device, not the SIM; EID = eSIM chip ID, ICCID = SIM card ID | general telecom knowledge; Apple lists EID, IMEI/MEID, ICCID together in 「關於本機」 | FIND |
| 4 | iPhone: 「設定」>「一般」>「關於本機」 shows 序號; may need to scroll for IMEI/MEID, EID, ICCID | verified | FIND |
| 5 | Touch and hold the number to copy | verified (English version of the same article) | https://support.apple.com/en-us/108037 |
| 6 | *#06# shows IMEI; generally works on iPhone too | Samsung HK verified; Apple zh-HK article does not mention *#06#. It is the standard GSM/3GPP code (3GPP TS 22.030), so written as 「一般同樣會顯示」 | SAM; general standard |
| 7 | iPhone with SIM tray: IMEI/MEID on tray can replace serial for support when Settings can't open; listed models iPhone 6s–13 series, SE 2/3, X/XS/XR, 8, 7 | verified | FIND |
| 8 | iPhone 14 and later have no IMEI/MEID engraving | verified | FIND |
| 9 | Original box barcode label shows serial, EID, IMEI/MEID | verified | FIND |
| 10 | Computer: Finder on Mac, Apple 裝置 app / iTunes on Windows; click model name for serial, 「電話號碼」 for IMEI | verified | FIND |
| 11 | account.apple.com > 「裝置」 > select device shows serial, EID, IMEI/MEID | verified | FIND |
| 12 | Samsung: 「設定」>「關於手機」 (older: 「狀態」); *#06#; printed on back of device | verified | SAM |
| 13 | Other Android brands: menus differ, mostly under 「關於手機」 | general, written softly | – |
| 14 | Coverage check by serial at checkcoverage.apple.com; also 「設定」>「一般」>「AppleCare 與保養」 and mysupport.apple.com; proof of coverage download | verified | COV |
| 15 | Coverage page does not show Activation Lock / theft status | verified by absence (no mention on COV or checkcoverage page) | COV; checkcoverage page |
| 16 | Apple removed its public Activation Lock checker in 2017 | verified (secondary sources) | ALREM |
| 17 | Hong Kong has no official public IMEI blacklist / stolen-phone lookup | verified as far as public sources show: 2012 LegCo reply (OFCA difficulties: invalid IMEIs, IMEI can be changed, phones taken out of HK); no later OFCA/police service found in searches on 2026-11-26 | LCQ |
| 18 | Third-party IMEI checkers are unofficial; accuracy, privacy and fee warnings | general advice; no site named | – |
| 19 | Find My / 「遺失模式」 requires 「尋找」 turned on before loss | verified | FINDMY; https://support.apple.com/zh-cn/HT2526 |
| 20 | Recorded IMEI/serial generally useful when reporting loss / contacting carrier / Apple | general, written with 「一般」; Apple confirms IMEI/serial used for support | FIND |
| 21 | 「電訊商鎖定」 shows 「沒有 SIM 卡限制」 when unlocked; only the carrier can unlock (Apple article path says 「關於」) | verified | CARRIER |
| 22 | Passcode / Home Screen = not erased; 「iPhone 已為擁有者鎖定」 = Activation Lock; 「哈囉」 = ready | verified | ALOCK |
| 23 | 「零件與維修記錄」 in 「關於本機」; non-genuine parts 「未知」 | verified | PARTS; content brief |
| 24 | Erase path 「轉移或重設 iPhone」>「清除所有內容和設定」; 「Apple 帳户（前稱 Apple ID）」 | verified | ERASE; content brief |
| 25 | Don't post full IMEI/serial publicly; misuse risk kept general | general advice, not sourced as a specific fraud | – |
| 26 | Recycling shop staff check 「關於本機」 and parts record during inspection | site's own process | src/pages/process.astro |
