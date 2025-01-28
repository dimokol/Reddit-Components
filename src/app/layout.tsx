import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import FontAwesomeConfig from './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/fe-logo.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <FontAwesomeConfig />
      </head>
      <body className='bg-gray-100 text-gray-800'>
        <Link
          href='/'
          className='fixed left-4 top-4 z-50 rounded-full bg-orange-600 px-3 py-2 text-white shadow-lg transition-all hover:bg-orange-700'
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>

        {children}
      </body>
    </html>
  )
}
