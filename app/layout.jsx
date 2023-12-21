
import { Inter } from 'next/font/google'
import './globals.css'

const montserrat = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Footery',
  description: 'Choose your footwear',
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
