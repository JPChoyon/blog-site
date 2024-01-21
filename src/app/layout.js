import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technical blog",
  description: "A technical blog website",

  keywords: [
    "blog",
    "technical blog",
    "bloging website for technology",
    "jp choyon khan",
  ],
  authors: [
    { name: "J P Choyon Khan" },
    { name: "choyon", url: "https://webdevjpck.web.app" },
  ],
  creator: "J P Choyon Khan",
  publisher: "J P Choyon Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
