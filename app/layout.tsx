import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://felidevblog.vercel.app"),
  title: { 
    default: "Feli Dev Blog", 
    template: "%s | Feli Dev Blog" 
  },
  description: "Welcome to Feli Dev Blog, where we share insights and stories about web development.",
  applicationName: "Feli Dev Blog",
  authors: [
      { name: "Feli", url: "https://felidevblog.vercel.app/about" }
  ],
  generator: "Next.js",
  keywords: ["web development", "blog", "programming", "JavaScript", "React"],
  referrer: "origin",
  // themeColor: "#000000",
  // colorScheme: "light",
  // viewport: "width=device-width, initial-scale=1",
  creator: "Feli",
  publisher: "Feli Dev Blog",
  robots: "index, follow",
  alternates: {
      canonical: "https://felidevblog.vercel.app",
  },
  icons: {
      icon: "https://felidevblog.vercel.app/icon.png",
      apple: "https://felidevblog.vercel.app/apple-icon.png"
  },
  manifest: new URL("https://felidevblog.vercel.app/manifest.json"),
  openGraph: {
      type: "website",
      url: "https://felidevblog.vercel.app",
      title: "My Blog",
      description: "Welcome to Feli Dev Blog, where we share insights and stories about web development.",
      siteName: "Feli Dev Blog",
      images: [
          {
              url: "https://felidevblog.vercel.app/og-image.png",
          }
      ]
  },
  twitter: {
      card: "summary_large_image",
      site: "@felidevjs",
      creator: "@felidevjs",
      title: "Feli Dev Blog",
      description: "Welcome to Feli Dev Blog, where we share insights and stories about web development.",
      images: "https://felidevblog.vercel.app/twitter-image.png"
  },
  verification: {
      google: "IeHYU3uSNv-x6ET2g1zLaTuVrTSmgyK_aY9DzpbOXy4",
      // yandex: "1234567890"
  },
  appleWebApp: {
      capable: true,
      title: "Feli Dev Blog",
      statusBarStyle: "black-translucent"
  },
  formatDetection: {
      telephone: false
  },
  abstract: "Insights and stories about web development.",
  archives: "https://felidevblog.vercel.app/archives",
  assets: "https://felidevblog.vercel.app/assets",
  bookmarks: "https://felidevblog.vercel.app/bookmarks",
  category: "Web Development",
  classification: "Programming",
  // other: {
  //     customMeta: "Custom Meta Value",
  //     anotherMeta: ["value1", "value2"]
  // }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
