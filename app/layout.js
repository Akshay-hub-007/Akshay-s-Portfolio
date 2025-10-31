
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect } from "react";
import Cursor from "./components/Cursor";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const metadata = {
  title: "Akshay Kalangi | Portfolio",
  description: "Full Stack Developer | KL University | AI Enthusiast",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        <Cursor/>
      </body>
    </html>
  );
}
