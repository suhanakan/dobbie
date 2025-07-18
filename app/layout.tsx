import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Based Good Rudi",
  description: "The Based Fox Taking Crypto to the Moon - Mine Free $GOODRUDI Tokens Every 24 Hours on Base Network",
  keywords: ["Based Good Rudi", "GOODRUDI", "Base Network", "Crypto", "Mining", "Meme Token", "DeFi"],
  authors: [{ name: "Based Good Rudi Team" }],
  creator: "Based Good Rudi",
  publisher: "Based Good Rudi",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Based Good Rudi - Mine Free $GOODRUDI Tokens",
    description: "Join Rudi on his journey to revolutionize the Base ecosystem. Mine free tokens every 24 hours!",
    url: "https://basedgoodrudi.com",
    siteName: "Based Good Rudi",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Based Good Rudi Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Based Good Rudi - Mine Free $GOODRUDI Tokens",
    description: "The Based Fox Taking Crypto to the Moon - Mine Free Tokens Every 24 Hours!",
    images: ["/favicon.png"],
    creator: "@BasedGoodRudi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
