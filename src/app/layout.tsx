import type { Metadata, Viewport } from 'next'
import { Poppins, Outfit } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import StyledComponentsRegistry from './lib/registry'
import { Wrapper } from './components/wrapper'
import { GlobalCss } from './style/global'
import { Menu } from './components/menu'
import { ThemeProvider } from './providers/ThemeProvider'
import { Footer } from './components/footer'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600'],
  style: ['italic', 'normal'],
  variable: '--font-poppins'
})

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600'],
  style: ['normal'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'Gabriel Chelles Portfolio',
  description: 'Gabriel Chelles UX/UI designer'
}

export const viewport: Viewport = {
  themeColor: '#000'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Wrapper>
              <GlobalCss />
              <Menu />
              {children}
              <Footer />
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
