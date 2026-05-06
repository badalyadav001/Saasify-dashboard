"use client"

import "./globals.css"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900 transition-colors">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}