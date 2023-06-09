import { useLocale } from 'next-intl'
import './globals.css'
import {notFound} from 'next/navigation';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
