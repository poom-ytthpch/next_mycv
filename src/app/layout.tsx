import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Yutthapichai Chaiwong | Full-Stack Software Engineer",
  description: "Full-stack software engineering portfolio focused on enterprise applications, data integration and industrial IoT.",
  icons: {
    icon: "/yc_icon_2.png",
    shortcut: "/yc_icon_2.png",
    apple: "/yc_icon_2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
