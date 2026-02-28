import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bistrodemo",
  description: "A demo app for a fast food restaurant and bar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-4 max-w-360 mx-auto">
            <header className="flex justify-between items-center mb-8 border-b py-4">
              <p className="font-medium text-lg md:text-xl">Bistrodemo</p>
              <div className="flex gap-2 md:gap-4">
                <ModeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href="/admin">
                    <Settings />
                    Gérer le site
                  </Link>
                </Button>
              </div>
            </header>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
