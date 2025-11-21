import type { Metadata } from "next";
import { Poppins, Space_Grotesk,Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import LayoutWrapper from "./components/LayoutWrapper";
import { ThemeProvider } from "./components/Authentication/theme-provider";
const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const vastagoGrotesk = localFont({
  variable: "--font-vastago-grotesk",
  src: "../public/fonts/VastagoGrotesk-Bold.otf",
});
export const metadata: Metadata = {
  title: "Paddle Connect",
  description:
    "Smart matchmaking platform for paddle clubs and players. Automate player connections, match management, and streamline court bookings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${vastagoGrotesk.variable} ${inter.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
