import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GET AI Assistant - Advanced Quantum Intelligence Dashboard",
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
  authors: [{ name: "GET AI Assistant Team" }],
  creator: "GET AI Assistant",
  publisher: "GET AI Assistant",
  robots: "index, follow",
  openGraph: {
    title: "GET AI Assistant - Advanced Quantum Intelligence Dashboard",
    description:
      "Advanced AI assistant dashboard with quantum processing, neural networks, and real-time data analysis capabilities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GET AI Assistant - Advanced Quantum Intelligence Dashboard",
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
