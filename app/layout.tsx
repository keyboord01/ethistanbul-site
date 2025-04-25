import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darker_grotesque = Darker_Grotesque({
  variable: "--font-Darker_Grotesque",
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: "ETHistanbul",
  description:
    "ETHistanbul is a conference and hackathon connecting you with global talents, industry professionals, and web3 companies advancing technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${darker_grotesque.variable}`}>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
