'use client'
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/Theme-Providers";
import { MenuContext } from "@/contexts/menuContext";
import { useState } from "react";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [menu, setMenu] = useState<boolean>(false)

  return (
    <html lang="en">
        <body
            className={cn(
            "min-h-screen bg-background font-sans antialiased flex",
            fontSans.variable
            )}
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <MenuContext.Provider value={{menu, setMenu}}>
                    <Navbar />
                    <div className="flex-1">
                        <Header />
                        {children}
                    </div>
                </MenuContext.Provider>
                
            </ThemeProvider>
        
            
        </body>
    </html>
  );
}
