import { Inter } from 'next/font/google'
import './globals.css'

const montserrat = Inter({ subsets: ['latin'] })


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'Footery',
  description: 'Choose your favourite footwear',
  viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0'
}

export default function RootLayout({
  children, 
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
