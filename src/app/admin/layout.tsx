// IMPORTS
import { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Bistrodemo - Admin",
  description: "Admin panel for Bistrodemo.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-4 max-w-360 mx-auto">
            <header className="flex justify-between items-center mb-8 border-b py-4">
              <p className="font-medium text-lg md:text-xl">Admin Bistrodemo</p>
              <div className="flex gap-2 md:gap-4">
                <ModeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft />
                    Retour au site
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
