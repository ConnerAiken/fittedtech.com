/* eslint-disable */
import { Inter } from "next/font/google";
import StoreProvider from "./storeProvider";
import "./globals.css";
import "./layout.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitted Tech",
  description: "Snoqualmie Valley IT Services and Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={inter.className}> 
              <script type="application/ld+json">
                {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Fitted Tech",
                "image": "https://www.fittedtech.com/logos/logo-dark-cropped.svg",
                "@id": "",
                "url": "https://www.fittedtech.com",
                "telephone": "(206) 651-4296",
                "priceRange": "100-1000",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "44303 SE Mount Si Rd",
                    "addressLocality": "North Bend",
                    "addressRegion": "WA",
                    "postalCode": "98045",
                    "addressCountry": "US"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 47.48471989999999,
                    "longitude": -121.7493509
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=61563964858799",
                    "https://www.instagram.com/fittedtech/",
                    "https://github.com/FittedTech",
                    "https://www.fittedtech.com"
                ] 
                }
                </script>

        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
      <GoogleAnalytics gaId="G-LKZCQY3SQE" />
    </html>
  );
}

