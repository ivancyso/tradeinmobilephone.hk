# Fact-check: samsung-smart-switch

Checked 2026-11-26 (publishedAt/updatedAt 2026-11-26). Recycling prices are placeholders from `src/data/prices.json` (non-null variants: iphone-16/128GB, iphone-15-pro/256GB, iphone-14/128GB, iphone-13/128GB). No official fees (HK$) quoted.

Sources:
- SS-APP = https://www.samsung.com/hk/apps/mobile/smartswitch (Samsung HK Smart Switch page)
- SS-WHAT = https://www.samsung.com/hk/support/apps-services/what-is-samsung-smart-switch (last updated 2026-01-08)
- SS-IOS = https://www.samsung.com/hk/support/mobile-devices/smart-switch-data-transfer/ (iOS → Galaxy guide, last updated 2026-11-03; English: https://www.samsung.com/hk_en/support/mobile-devices/how-to-transfer-data-from-an-iphone-or-ipad-to-a-new-galaxy-device-with-smart-switch/)
- SS-HTV = https://www.samsung.com/hk/support/skp/htv/21643
- SS-WA = https://www.samsung.com/hk/support/mobile-devices/faq-smart-switch-whatsapp-transfer-from-ios-to-android/ (EN: https://www.samsung.com/hk_en/support/mobile-devices/faq-smart-switch-whatsapp-transfer-from-ios-to-android/)
- WA = https://faq.whatsapp.com/1295296267926284 (How to move chats from an iPhone to an Android device); WA-T = https://faq.whatsapp.com/1066696467238362 (Can't move chats…) — pages are JS-rendered; content read via search-engine extracts of these two official URLs
- AP-DEREG = https://support.apple.com/zh-hk/102455 (在 iPhone 或網上取消註冊 iMessage); AP-TOOL = https://selfsolve.apple.com/deregister-imessage/hk/zh
- AP-USBC = https://www.apple.com/hk/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/
- BRIEF = docs/content-brief.md (Apple HK menu wording verified on support.apple.com/zh-hk)
- SAM-TI = https://www.samsung.com/hk_en/shop-faq/service-and-warranty/how-to-participate-in-trade-in-program/

| # | Claim | Verdict | Source |
|---|---|---|---|
| 1 | Smart Switch is Samsung's free transfer/backup tool; supports sending from Galaxy, Android, iPhone; receiving device must be a Samsung phone/tablet | correct ("free" = no charge mentioned; app is a free download) | SS-WHAT; SS-APP |
| 2 | Three ways: wireless, USB cable, PC/Mac (Smart Switch PC backup/restore); iTunes (Finder) backup restorable | correct | SS-APP |
| 3 | iOS → Galaxy typically transfers contacts, messages, photos, music, videos, documents, calendars, notes, some settings; Wi‑Fi etc. depend on method | correct | SS-APP |
| 4 | Not transferable: read-only contacts, DRM-protected media, personal app data, preloaded/theme wallpapers; passwords and passkeys generally not | correct | SS-APP |
| 5 | Smart Switch does not delete data from either device | correct | SS-APP |
| 6 | Transferable list varies by OS/version/connection; may change without notice | correct | SS-APP |
| 7 | Requirements: sending Android 6.0+ / iOS 12.0+; PC Windows 10+; macOS 10.13+ | correct (SS-WHAT lists older minimums, Android 4.3 / iOS 5.0; post uses the newer SS-APP figures) | SS-APP; SS-WHAT |
| 8 | New wireless QR method (iPhone camera, no app on iPhone) only on iOS 26.6, Android 17, One UI 9.0 or later; older Galaxy use 「在此手機接收」 → iPhone | correct | SS-IOS; SS-APP; SS-HTV |
| 9 | Wireless step list (privacy policy → choose iPhone/iPad → scan QR → side by side, 繼續, passcode → 同意/permissions → select data → screen lock/Google/Samsung setup → check notification) | correct, condensed | SS-IOS |
| 10 | Wireless failure stops the process; restart from connection screen | correct | SS-IOS |
| 11 | WhatsApp, reminders, paired Bluetooth devices, blocked contacts, browser bookmarks need a wired transfer via 「對話與設定」 tip card | correct | SS-IOS |
| 12 | Cable steps: open Smart Switch on Galaxy, agree/permissions, receive → iPhone/iPad, connect (Lightning + USB adapter), tap 「信任」, select content | correct (Samsung HK cable page, last updated 2026-01-05, per search extract); passcode prompt per Samsung US ANS10001413 | SS-HTV; https://www.samsung.com/us/support/answer/ANS10001413 |
| 13 | Cable options: USB-C to USB-C, or Lightning + USB adapter (OTG); iPhone 15 and later use USB-C | correct (OTG adapter: Samsung AE page; iPhone 15 USB-C: Apple HK newsroom) | https://www.samsung.com/ae/support/mobile-devices/how-to-move-from-ios-phone-to-samsung/ ; AP-USBC |
| 14 | iCloud import: contacts, calendar, notes, images, videos, documents; large iCloud data → download to PC first, then cable | correct | SS-IOS |
| 15 | Sync iPhone to iCloud before using iCloud import | correct (general; Samsung IN page) | https://www.samsung.com/in/support/mobile-devices/how-to-move-from-ios-phone-to-samsung/ |
| 16 | "儲存空間不足" if backup larger than new phone storage | correct | SS-WA (search extract of Samsung HK WhatsApp FAQ) |
| 17 | PC steps (install PC app, backup, connect new Galaxy, restore) | correct in general; button labels written generically | SS-APP |
| 18 | Troubleshooting table: 「信任」 no response → re-plug / enter passcode; photos only in iCloud → import from iCloud | general guidance, not an official troubleshooting list; worded as likely causes | SS-IOS; SS-APP |
| 19 | iOS apps must be re-downloaded from Google Play; app data not transferred | correct (personal app data not transferable) | SS-APP |
| 20 | WhatsApp: transfer before activating WhatsApp on new phone; same number; new phone must be new or factory reset | correct | WA; WA-T; SS-WA (EN: "can only be transferred before activating in new device") |
| 21 | WhatsApp path 「聊天」>「轉移聊天記錄」>「轉移到 Android」, scan QR, same Wi‑Fi | correct (English labels Chats > Transfer chat history > Transfer to Android; Chinese labels translated, may differ slightly) | WA |
| 22 | Change number on iPhone first if moving to a new number | correct | WA; WA-T |
| 23 | Not transferable: status updates, peer-to-peer payment messages; WhatsApp Business iPhone→Android not supported | correct | WA |
| 24 | Don't delete iPhone WhatsApp until transfer complete; third-party apps unsupported, may lose chats | correct | WA |
| 25 | Android/iOS version minimums for WhatsApp | **left out**: WhatsApp pages conflict (Android 6 vs Android 10; iOS 15.5) — post tells readers to check the Help Center | WA; WA-T |
| 26 | Turn off iMessage: put SIM back, mobile data on, 「設定」>「App」>「訊息」 off iMessage; 「設定」>「App」>「FaceTime」 off | correct | AP-DEREG |
| 27 | Online deregister: choose region, enter number, free SMS code, enter 6-digit code | correct | AP-DEREG; AP-TOOL |
| 28 | Texts usually received right away; some Apple devices may take hours | correct | AP-DEREG |
| 29 | Samsung guide lists turning off iMessage as a migration step | correct | SS-IOS |
| 30 | iPhone sell prep: 取消配對 Apple Watch; 「設定」>[你的姓名]>「登出」; 「設定」>「一般」>「轉移或重設 iPhone」>「清除所有內容和設定」; 「哈囉」 screen; 「Apple 帳户（前稱 Apple ID）」 | correct (brief's verified wording) | BRIEF |
| 31 | Signing out also turns off Find My | correct (Apple: signing out turns off Find My) | https://support.apple.com/zh-hk/109511 |
| 32 | Samsung HK Trade-in: must buy new Samsung device; paid by bank transfer/FPS to HK bank account in 2–3 working days after final inspection | correct (reused from samsung-trade-in-vs-recycling log) | SAM-TI |
| 33 | Prices | placeholders only, non-null variants | src/data/prices.json |
| 34 | Own service (quote, MTR handover, cash/FPS) | only via links to /process/ and /contact/ | — |

Could not verify: exact Hong Kong Chinese UI labels inside WhatsApp and the Smart Switch PC app (written generically); a single authoritative WhatsApp OS-version minimum (omitted).
