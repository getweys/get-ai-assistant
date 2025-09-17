import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Assistant Pro - Advanced Quantum Intelligence Dashboard",
  description:
    "Advanced AI assistant dashboard with quantum processing, neural networks, and real-time data analysis capabilities.",
  keywords: [
    "AI",
    "artificial intelligence",
    "dashboard",
    "analytics",
    "quantum computing",
    "neural networks",
  ],
  authors: [{ name: "AI Assistant Pro Team" }],
  creator: "AI Assistant Pro",
  publisher: "AI Assistant Pro",
  robots: "index, follow",
  openGraph: {
    title: "AI Assistant Pro - Advanced Quantum Intelligence Dashboard",
    description:
      "Advanced AI assistant dashboard with quantum processing, neural networks, and real-time data analysis capabilities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant Pro - Advanced Quantum Intelligence Dashboard",
    description:
      "Advanced AI assistant dashboard with quantum processing, neural networks, and real-time data analysis capabilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
