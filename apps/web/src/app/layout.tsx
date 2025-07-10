import "../styles/globals.css";

import { ThemeProvider } from "../components/theme-provider";
import { GeistSans as geist } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zettlo",
  description:
    "AI-native, open-source note taking and knowledge management tool",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
