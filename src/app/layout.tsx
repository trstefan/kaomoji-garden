import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "@/components/navbar";
import { HomeButton } from "@/components/HomeButton";

export const metadata: Metadata = {
  title: "Kaomoji Garden",
  description:
    "Kaomoji Garden - cozy, relaxing feel like a collection of expressions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-right" richColors />
        <HomeButton />
      </body>
    </html>
  );
}
