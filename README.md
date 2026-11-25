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
