# tradeinmobilephone.hk

香港手機回收價網站。Astro 靜態網站，價格及文章都以 JSON 檔案儲存，不需要資料庫。

## 開始

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 先檢查 prices.json，再輸出到 dist/
```

## 更新價格（最常用）

所有價格只存在一個檔案：`src/data/prices.json`。

1. 修改 `updatedAt`（例如 `"2026-12-01"`）。
2. 修改型號的 `price`（港幣整數）。設為 `null` 會顯示「查詢報價」。
3. 執行 `npm run prices:snapshot`，把今次價格存入 `src/data/history/<日期>.json`。
4. `npm run build` 會先檢查格式，有錯會停止並列出原因。

網站會自動與上一份歷史記錄比較，在價格旁顯示 ▲▼ 升跌。

新增型號：在對應分類的 `models` 加一項，`slug` 只用細楷英文、數字及 `-`，會自動產生 `/iphone/<slug>/` 頁面、sitemap、llms.txt 及 /prices.json。

可選欄位：`note`（例如「紫色最高 $3,000」）、`tags`（`["熱門"]` 會在首頁顯示快捷按鈕；`["最新"]`）。

### 價錢來源規則

1. 先用 tradein.com.hk 的價錢（iPhone 以首頁「每日更新」價目表為準，不用型號頁）。同型號不同顏色價錢不同時，取最多顏色的價錢，其餘寫入 `note`。
2. tradein 沒有報價的，才用 okhk.store 的價錢，並加上 `"source": "okhk"`。
3. 兩邊都沒有：`price` 設為 `null`，網站顯示「查詢報價」。

### 文案中的價錢

文章（`src/content/guides/*.json`）、FAQ（`src/lib/faq.ts`、`src/lib/copy.ts`）及型號 `faqs` 內不要直接寫價錢，改用佔位符，build 時會自動填入最新價：

- `{{price:iphone/iphone-17-pro-max/256GB}}` → 該容量回收價
- `{{price:iphone/iphone-17-pro-max/256GB*1.2}}` → 乘 1.2 後取整至百位（用於估算）
- `{{date}}` → 價格更新日期

佔位符寫錯（型號或容量不存在）會令 build 失敗，不會上線錯價。

## 新增文章（回收指南）

在 `src/content/guides/` 新增一個 JSON 檔，檔名就是網址（例如 `iphone-17-guide.json` → `/guides/iphone-17-guide/`）。

```json
{
  "title": "文章標題",
  "description": "150 字內的描述",
  "keyword": "主要關鍵字",
  "category": "iphone",
  "publishedAt": "2026-12-01",
  "updatedAt": "2026-12-01",
  "summary": ["重點一", "重點二"],
  "faqs": [{ "q": "問題", "a": "答案" }],
  "body": "Markdown 內文……"
}
```

`category` 可用 `iphone`、`samsung`、`ipad`、`macbook`、`general`，用來決定側欄顯示哪個價格表及型號頁的延伸閱讀。

## 聯絡方法

`src/data/site.json`：填入 `whatsapp`（例如 `"85212345678"`）後，所有報價按鈕會自動由電郵改為 WhatsApp。

## SEO / GEO

- 每個型號一頁，標題對準「<型號> 回收價」關鍵字。
- JSON-LD：Organization、WebSite、BreadcrumbList、FAQPage、ItemList、Dataset、Article、HowTo。
- `/sitemap-index.xml`、`/robots.txt`（容許 AI 爬蟲）、`/llms.txt`、`/prices.json`（機讀價格數據）。
- 每頁頂部有「答案框」，以一兩句直接回答問題，方便 AI 摘錄。
