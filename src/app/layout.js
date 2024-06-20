import {  IBM_Plex_Serif } from 'next/font/google'
import './globals.css'

const rubik = IBM_Plex_Serif({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: 'MySeaDrive',
  description: 'Home to all your personal diving media',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
