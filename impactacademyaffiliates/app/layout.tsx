import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Impact Academy Affiliates',
  description: 'Impact Academy - educação digital e marketing de afiliados'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
