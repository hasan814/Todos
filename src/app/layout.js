import { Inter } from "next/font/google";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Main from "@/layout/main";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "You can schedule your paln with this app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
