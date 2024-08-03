import { Inter } from "next/font/google";
import "./globals.css"; 
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitted Tech",
  description: "Snoqualmie Valley IT Services and Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='favicons/favicon-dark.ico' sizes="any" />
      </Head> 
      <body className={inter.className}>
        <header className="bg-white fixed top-0 w-full shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-gray-800">MyWebsite</a>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">Services</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
                        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Free Estimate</a>
                    </div>
                    <div className="md:hidden flex items-center">
                    <button className="text-gray-800 focus:outline-none"> {/* <!-- Add a hamburger menu icon here --> */}
                      Btn
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
