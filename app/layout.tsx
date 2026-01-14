import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google" 
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configure the Ubuntu font
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], 
  variable: "--font-sans", 
})

export const metadata: Metadata = {
  title: "Prashant Mishra", 
  description: "Dynamic HR Portfolio.", 
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={ubuntu.variable}>
      {" "}
      {/* Apply the font variable class */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
