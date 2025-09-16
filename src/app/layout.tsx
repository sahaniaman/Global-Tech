import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Tech",
  description: "Global Tech is a professional web development company specializing in Full Stack Development, Web Design, Cloud Solutions, AI Agents, and Chatbots. Based in London.",
  keywords: ["Web Development", "Full Stack", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Cloud Solutions", "AI Agents", "London"],
  authors: [{ name: "Global Tech Team" }],
  openGraph: {
    title: "Global Tech",
    description: "Web development services including Full Stack Development, Web Design, and Cloud Solutions",
    url: "",
    siteName: "Global Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Tech - Web Development",
    description: "Web development services in London",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
