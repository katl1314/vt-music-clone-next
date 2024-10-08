import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import Sidebar from "@/components/Sidebar";
import PlayerWrapper from "@/components/player/PlayerWrapper";

const inter = Inter({ subsets: ["latin"] });

// 메타데이터 사용시 metadata라고 똑같이 사용해야함.
// 만약 og같은 기능 사용시 metadata에 추가해야할듯.
export const metadata: Metadata = {
  title: "Youtube Music Clone Coding",
  icons: {
    icon: "./favicon.ico", // 아이콘, 이미지, 등 정적 리소스는 public에 위치한다.
  },
  description: "Youtube Music Clone Coding by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
