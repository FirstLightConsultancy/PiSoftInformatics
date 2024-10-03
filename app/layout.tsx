import type { Metadata } from "next";
import "./globals.css";
/* Add these in your main CSS file or import them */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const metadata: Metadata = {
  title: "Start Up",
  description: "Best StartUp Guide Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
