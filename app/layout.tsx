import type { Metadata } from "next";
import "./globals.css";

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
