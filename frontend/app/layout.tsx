import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Encrypted Donation Log",
  description: "Privacy-preserving anonymous donation tracking system",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`donation-bg text-foreground antialiased min-h-screen`}>
        <div className="fixed inset-0 w-full h-full donation-bg z-[-20] min-w-[850px]"></div>
        <main className="flex flex-col max-w-screen-lg mx-auto pb-20 min-w-[850px]">
          <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Donation Log Logo"
                width={120}
                height={120}
                className="rounded-full"
                priority
              />
              <h1 className="text-3xl font-bold text-white">Encrypted Donation Log</h1>
            </div>
          </nav>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

