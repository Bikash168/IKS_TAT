import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Bhagabata Tungi Digital Archive",
  description:
    "IKS Digital Repository – Preserving Social Harmony & Cultural Heritage of Odisha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
