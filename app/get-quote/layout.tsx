import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

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
      <Navbar/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
