import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Shyam Realtors",
  description: "Shree Shyam Realtors CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
