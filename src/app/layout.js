import { Inter } from "next/font/google";
import Image from "next/image";
import StoreProvider from "./storeProvider";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import GoogleAnalytics from "./../utils/ga";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitted Tech",
  description: "Snoqualmie Valley IT Services and Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <GoogleAnalytics />
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

