import type { Metadata } from "next";
import "primereact/resources/themes/lara-light-pink/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Renuka's Kitchen | Custom Cakes in Barshi",
  description:
    "Homemade cakes, custom celebration bakes, candles, toppers, and surprise add-ons from Renuka's Kitchen in Barshi.",
  keywords: [
    "Renuka's Kitchen",
    "cake shop",
    "custom cakes",
    "Barshi bakery",
    "birthday cakes",
    "anniversary cakes"
  ]
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
