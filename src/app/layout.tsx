import '@/assets/css/style.css'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import type { Metadata } from 'next'
import { Instrument_Sans, Inter } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: '/climate-city-icon.png', apple: '/assets/logo-green-compact.png' },
  description: 'Climate City is a proposed sustainable community in Nasarawa, Africa, powered by Climate City.',
  keywords: ['Climate City', 'Africa', 'sustainable city', 'Climate City'],
  authors: [{ name: 'Climate City' }],
  robots: 'index, follow',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSans.variable} antialiased`}>
      <body suppressHydrationWarning>
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
