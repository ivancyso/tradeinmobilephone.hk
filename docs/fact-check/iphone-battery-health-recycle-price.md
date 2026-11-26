# Fact-check log: iphone-battery-health-recycle-price

Checked 2026-11-25/26. Deduction percentages are the site's own estimate (QuoteForm.astro: 90%+ ×1, 85–89% ×0.95, 80–84% ×0.9, <80% ×0.85). They are not external facts.

Sources:
- BAT = https://support.apple.com/zh-hk/101575 (iPhone 電池與效能, dated 2026-06-17)
- B11 = https://support.apple.com/zh-hk/106348 (關於 iPhone 11 和之後型號的電池與效能, dated 2026-10-29)
- PARTS = https://support.apple.com/zh-hk/102658 (iPhone 零件和維修記錄)
- HKBAT = https://www.apple.com/hk/batteries/maximizing-performance/ and https://www.apple.com/hk/batteries/why-lithium-ion/
- MAC = https://support.apple.com/zh-hk/102888 (Mac 手提電腦電池循環使用次數); battery health states: https://support.apple.com/zh-cn/guide/mac-help-cn/mh20865/mac
- IPAD = https://support.apple.com/en-sg/117759
- QF = src/components/QuoteForm.astro

| # | Claim (original) | Verdict | Now says / note | Source |
|---|---|---|---|---|
| 1 | Path: 設定 > 電池 > 電池健康與充電 (body) vs 電池健康度 (summary, table) | corrected | Unified to 「設定」>「電池」>「電池健康度」 per coordinator's authoritative wording. Note: B11 still uses 「電池健康與充電」 for iPhone 11–14 | BAT; B11 |
| 2 | 「最大容量」 = current capacity vs new | correct | Reworded to Apple's definition. Added that new phones may show slightly under 100% | BAT |
| 3 | Lower % means shorter runtime and more sudden shutdowns | softened | Tied to Apple's peak-performance and unexpected-shutdown explanation | BAT |
| 4 | (new) 80% at 500 cycles (iPhone 14 and earlier), 1,000 cycles (iPhone 15 and later), ideal conditions | added | — | BAT; B11 |
| 5 | "建議維修或「服務」訊息" | corrected | Now quotes Apple's zh-HK message 「你的電池效能已顯著降低…」. Apple says it is not a safety issue | BAT |
| 6 | 「無法驗證此 iPhone 是否使用正版 Apple 電池」 | corrected | Exact wording is 「無法驗證此 iPhone 是否有正版 Apple 電池。此電池的詳細資訊可能不正確。」, applies to XS/XR and later | BAT |
| 7 | Deductions 90+/85–89 −5%/80–84 −10%/<80 "較多，約 15% 或以上" | corrected | "或以上" removed, since the form uses ×0.85. Added 80–84 to summary/FAQ | QF |
| 8 | Battery and condition deductions stack | correct | Form multiplies condition × battery | QF |
| 9 | 「零件與服務紀錄」 / 「未知零件」 | corrected | Correct: 「零件與維修記錄」 in 設定 > 一般 > 關於本機 (iOS 15.2+, only if repaired). Label 「未知」. Apple: unknown parts may affect trade-in value | PARTS |
| 10 | Non-genuine battery: "電池健康度亦可能無法顯示" | softened | Now "資訊可能不正確" per Apple's current message | BAT |
| 11 | Charge cycle = using 100% cumulatively, e.g. 50% + 50% over two days | correct | Example changed to Apple's 75% + 25% | HKBAT |
| 12 | Cycle count for iPhone 15+ in 電池健康與充電 (newer iOS) / 關於本機 (early iOS 17) | softened | Per coordinator: no menu path. Now "視乎 iOS 版本，可在「設定」內查看循環使用次數、製造日期及首次使用日期". Note: B11 states iPhone 15+ on iOS 17.4+ shows these under 設定 > 電池 > 電池健康度 | B11 |
| 13 | Health can drop a few points after an update/recalibration, "多數是系統重新計算" | softened | Limited to Apple's documented iOS 14.5 recalibration for iPhone 11 / 11 Pro / 11 Pro Max | BAT |
| 14 | Heat and "快充至滿電後長時間不拔" accelerate ageing | corrected | Kept heat, with Apple's 35°C threshold. Removed the fast-charge claim | HKBAT |
| 15 | Replace battery only if price gain > cost; check Apple's replacement price | correct (advice) | Uses site multipliers | QF |
| 16 | Use Apple or authorised provider with genuine parts | correct | — | PARTS |
| 17 | iPad: newer models show battery info in Settings, older may not | corrected | Named: iPad Pro (M4), iPad Air (M2) and later show 設定 > 電池 > 電池健康度. Older ones generally don't | IPAD |
| 18 | MacBook: 系統設定 > 電池; cycle count in 系統資訊 > 電源 | corrected | zh-HK wording: hold Option, Apple menu > 「系統資料」>「電源」>「電池資料」. Battery health state includes 「建議維修」. Added: Mac batteries retain up to 80% at the model's cycle limit | MAC |
| 19 | 「優化電池充電」 | corrected | Apple HK term is 「最佳化電池充電」. Description now matches Apple (delays charging past 80% based on habits) | HKBAT |
| 20 | "不需要每次都充到 100%" | removed | Not in Apple sources | — |
| 21 | "不必等到完全沒電才充" | correct | — | HKBAT |
| 22 | (new) Store long-term at about 50% charge | added | — | HKBAT |
| 23 | Use original or certified chargers | correct (general advice) | Kept | — |
| 24 | Inspection 5–10 min, checks battery and parts history | correct | Owner claims | src/pages/process.astro |
| 25 | MacBook Air 13 M2 price placeholder | correct | Variant exists and is non-null | prices.json |

Apple 帳户 naming: this post doesn't mention the account, so nothing to change.

## Final resolution (main session, 2026-11-26)

| Claim | Verdict | Source |
|---|---|---|
| Battery menu: iPhone 15 and later (iOS 17.4+) 「設定」>「電池」>「電池健康度」; iPhone 11–14 「設定」>「電池」>「電池健康與充電」 | corrected (model-dependent; replaces the single-path wording) | https://support.apple.com/zh-hk/106348 (發佈日期 2026-10-29) |
| iPhone 15 and later on iOS 17.4+ show 循環使用次數, 電池製造日期 and 首次使用日期 in 「電池健康度」 | restored (verified) | https://support.apple.com/zh-hk/106348 |
| iPhone 14 and earlier: cycle count not listed in Settings | softened to "Apple's support article only lists iPhone 15 and later" | https://support.apple.com/zh-hk/106348 |
