import type { Viewport } from 'next'
import { Poppins, Outfit } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import StyledComponentsRegistry from './lib/registry'
import { Wrapper } from './components/wrapper'
import { GlobalCss } from './style/global'
import { Menu } from './components/menu'
import { ThemeProvider } from './providers/ThemeProvider'
import { Footer } from './components/footer'
import { hygraph } from './graphql/client'
import { FOOTER } from './graphql/queries'
import { FooterProps } from './graphql/types'
import { Hotjar } from './components/hotjar'
import { GoogleAnalytics } from './components/google-analytics'
import { MenuProvider } from './providers/MenuProvider'
import { getMetaDataApi } from './services/metadata'

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

export const revalidate = process.env.REVALIDATE_TIME

const getFooter = async () => {
  const data: FooterProps = await hygraph.request(FOOTER)
  if (!data) throw Error('Error to fetch Footer data!')
  return data.footers[0]
}

export const viewport: Viewport = {
  themeColor: '#000'
}
export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const data = await getFooter()
  const metatag = await getMetaDataApi()
  return (
    <html lang="pt-br">
      <head>
        {!!metatag && !!metatag.maskIcon && (
          <link
            rel="mask-icon"
            href={metatag.maskIcon.url}
            color={metatag.maskIconColor}></link>
        )}
        <GoogleAnalytics />
        <Hotjar />
      </head>
      <body className={outfit.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Wrapper>
              <GlobalCss />
              <MenuProvider visible={false}>
                <Menu {...data.contact} />
              </MenuProvider>
              {children}
              <Footer {...data} />
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
