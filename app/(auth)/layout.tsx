import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "sonner";
import AppSidebar from "./_components/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard | PayBD",
  description: "PayBD | Your Digital Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen gap-10`}
        suppressHydrationWarning
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 bg-gray-50 text-gray-800 overflow-x-hidden font-sans">
            <SidebarTrigger className="fixed top-0 z-10" />
            {children}
          </main>
        </SidebarProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
