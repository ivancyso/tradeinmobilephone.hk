// Category-level copy. Titles target the main keyword cluster found for each category.
export const categoryCopy: Record<string, { h1: string; title: string; intro: string; faqs: { q: string; a: string }[] }> = {
  iphone: {
    h1: 'iPhone 回收價格表',
    title: 'iPhone 回收價 {year}｜iPhone 17／16／15／14／13／12 二手收機價格表',
    intro: '全系列 iPhone 二手回收價，由最新 iPhone 17 Pro Max 到 iPhone 6、SE 都有。價格按容量列出，按型號可看詳細價錢、升跌及估價。',
    faqs: [
      { q: '哪款 iPhone 最保值？', a: 'Pro Max 型號最保值。以現時參考價計，iPhone 16 Pro Max 256GB 推出約兩年後仍可回收 {{price:iphone/iphone-16-pro-max/256GB}} 左右，而同期標準版 iPhone 16 跌幅較大。' },
      { q: '新 iPhone 發佈後舊機會跌價多少？', a: '每年 9 月新機發佈後，上一代 iPhone 回收價通常在一至兩星期內下跌約一成至兩成。想賣舊機，最好在發佈會前出手。' },
      { q: 'iPhone 電池健康度低會扣幾多？', a: '電池健康度 90% 以上可取最高價；85% 至 89% 一般扣約 5%；低於 80% 或顯示「維修」訊息，扣價會較多，視乎型號而定。' },
    ],
  },
  samsung: {
    h1: 'Samsung 三星回收價格表',
    title: '三星回收價格表 {year}｜Samsung Galaxy S26／S25／Z Fold8／Z Flip8 回收價',
    intro: 'Samsung Galaxy 全系列回收價，包括最新 S26 Ultra、S25、S24 及 Z Fold8、Z Flip8 摺疊機。價格按儲存容量列出，香港行貨及功能正常為準。',
    faqs: [
      { q: 'Samsung trade in 定賣回收店好？', a: 'Samsung 官方 Trade-in 只能折算為購買新機的優惠，價錢通常較低；回收店直接以現金或轉數快付款，價錢一般較高，亦不用綁定購買新機。' },
      { q: '三星回收價與 iPhone 相比如何？', a: '整體而言，同級 Samsung 旗艦的回收價約為 iPhone 的六至八成。S Ultra 系列及 Z Fold 摺疊機保值較好，S 系列標準版跌幅較大。' },
      { q: 'Z Fold／Z Flip 摺疊機回收要注意甚麼？', a: '驗機會特別檢查內屏有否壓點或保護貼起泡、鉸鏈開合是否順暢，以及外屏顯示是否正常。中間輕微摺痕屬正常，不會扣價。' },
    ],
  },
  ipad: {
    h1: 'iPad 回收價格表',
    title: 'iPad 回收價 {year}｜iPad Pro／Air／mini 二手回收價格表',
    intro: 'iPad Pro、iPad Air、iPad mini 及標準版 iPad 回收報價。Wi-Fi + Cellular 版本一般較 Wi-Fi 版本高；連 Apple Pencil 或鍵盤一併回收可另議價。',
    faqs: [
      { q: 'iPad 回收價是怎樣計算的？', a: '主要看晶片世代（M4 > M3 > M2 > M1）、儲存容量、外觀成色、是否 Cellular 版本，以及有否原裝配件。' },
      { q: 'iPad 回收前要做甚麼？', a: '備份後到「設定」登出 Apple ID，關閉「尋找」，再到「一般」>「傳輸或重置 iPad」>「抹掉所有內容和設定」。' },
    ],
  },
  macbook: {
    h1: 'MacBook 回收價格表',
    title: 'MacBook 回收價 {year}｜MacBook Pro／Air 二手回收價格表',
    intro: 'MacBook Pro 及 MacBook Air 回收報價，涵蓋 M5、M4、M3、M2、M1 晶片及 Intel 舊款。價格按晶片、記憶體及儲存配置列出。',
    faqs: [
      { q: 'MacBook 回收價受甚麼影響？', a: '晶片世代（M3 > M2 > M1 > Intel）、記憶體（16GB 高於 8GB）、儲存容量、電池循環次數及外觀。附原裝火牛可取較高價。' },
      { q: 'MacBook 回收前要做甚麼？', a: '用 Time Machine 備份，登出 iCloud 及「尋找我的 Mac」，然後在「系統設定」>「一般」>「傳輸或重置」>「清除所有內容和設定」。' },
    ],
  },
};
