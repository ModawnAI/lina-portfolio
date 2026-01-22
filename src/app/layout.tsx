import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김리나 | 조명감독 포트폴리오",
  description: "넷플릭스 작품 조명감독 김리나의 공식 포트폴리오 사이트입니다.",
  keywords: ["조명감독", "김리나", "넷플릭스", "영화", "조명", "촬영"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
