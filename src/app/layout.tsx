import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Yutthapichai",
  description: "Yutthapichai Portfolio",
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
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
