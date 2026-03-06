import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_KR, Syne } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "엣지 AI 교육 Q&A 참고자료 | RPi5 + Hailo + ONNX",
  description:
    "라즈베리파이 5 × Hailo-8L NPU 엣지 AI 교육 Q&A 참고자료 — 발표 전 청중 사전 교육 및 질의응답 대비를 위한 참고 사이트, 핵심 개념, 예상 질문 정리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${jetbrainsMono.variable} ${notoSansKR.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
