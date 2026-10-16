import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "謝宜臻・產業數位化｜需求轉譯・系統規劃與導入",
  description:
    "從建築設計到產業數位化 PM，專注流程梳理、系統需求、AI 應用與組織導入。曾主導建築科技新創的產品開發與客戶導入，協助傳統產業走過數位轉型的現場。",
  openGraph: {
    title: "謝宜臻・產業數位化｜需求轉譯・系統規劃與導入",
    description:
      "從建築設計到產業數位化 PM，專注流程梳理、系統需求、AI 應用與組織導入。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSerifTC.variable} ${notoSansTC.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
