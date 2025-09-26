import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/molecules/theme-provider";
import "./globals.css";
import { ReactNode } from "react";
import { ToastProvider } from "@radix-ui/react-toast";
import { Provider } from "@/redux/provider";
import { NextIntlClientProvider } from "next-intl";

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
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NextIntlClientProvider>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
          </Provider>

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
