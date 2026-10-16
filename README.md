# 謝宜臻・個人作品集網站

一頁式個人網站，以捲動敘事呈現職涯軌跡。

## 技術架構

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- 靜態輸出（`output: 'export'`），部署至 GitHub Pages
- 字體：Noto Serif TC（標題敘事）、Noto Sans TC（內文）、Inter（數字年份）
- 夜間模式：`next-themes` + Tailwind `class` 策略
- 捲動動畫：IntersectionObserver + CSS transition（無額外動畫套件）
- 軌跡線：SVG `stroke-dashoffset` 搭配 `requestAnimationFrame`

## 本機開發

```bash
npm install
npm run dev
# 開啟 http://localhost:3000
```

本機開發時 `basePath` 不會套用，直接用根路徑預覽。

## 修改文案

所有章節文字、敘事句、條列內容都集中在 **`content/chapters.ts`**，
與排版邏輯完全分離，直接編輯該檔案即可。

- 標有 `// 敘事草稿，待本人確認` 的欄位：詮釋句，請確認語氣是否符合本意
- 標有 `// 待補` 的欄位：量化數據尚未填入，請補充後畫面才會顯示

## 部署

Push 到 `main` 即自動觸發 GitHub Actions，完成後發布至：

```
https://ianh313.github.io/yijen-portfolio/
```

## 專案結構

```
app/
  layout.tsx          # 字體、ThemeProvider、metadata
  page.tsx            # 頁面組裝（各章節順序）
  globals.css         # CSS 變數、Tailwind v4 設定
components/
  Hero.tsx            # 開場
  Chapter.tsx         # 通用章節（1–5 章）
  MethodSteps.tsx     # 方法章節（六步驟）
  Closing.tsx         # 收尾
  TrajectoryLine.tsx  # SVG 軌跡線
  ThemeToggle.tsx     # 日／夜模式切換鈕
  Reveal.tsx          # IntersectionObserver 淡入元件
content/
  chapters.ts         # 所有文案、章節資料
public/
  .nojekyll           # GitHub Pages Jekyll 停用
.github/
  workflows/
    deploy.yml        # 自動部署 workflow
```
