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
import { hygraph } from './graphql/client'
import { FOOTER } from './graphql/queries'
import { FooterProps } from './graphql/types'
import { Hotjar } from './components/hotjar'
import { GoogleAnalytics } from './components/google-analytics'
import { MenuProvider } from './providers/MenuProvider'

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
  title: 'Gabriel Chelles Product Designer',
  description: 'Portfolio de Gabriel Chelles contendo todos os seus projetos',
  applicationName: 'Gabriel Chelles Product Designer',
  abstract: 'Gabriel Chelles Product|UX|UI designer',
  icons: {
    icon: {
      url: '/images/favicon.png',
      href: '/images/favicon.png'
    }
  },
  appleWebApp: {
    title: 'Gabriel Chelles Product Designer',
    statusBarStyle: 'black-translucent',
    startupImage: {
      url: '/images/favicon.png'
    }
  },
  authors: {
    name: 'Gabriel Chelles'
  },
  category: 'Portfolio',
  creator: 'Andre Quintero dos Santos',
  generator: 'Next.js',
  keywords: [
    'Gabriel',
    'Chelles',
    'gabriel',
    'chelles',
    'site',
    'website',
    'projetos',
    'portfolio',
    'UX',
    'UI',
    'design',
    'figma',
    'blog',
    'photoshop',
    'illustrator',
    'after effects',
    'premiere',
    'hotjar',
    'analytics',
    'responsive web design',
    'teste de usabilidade',
    'usabilty test',
    'product discovery',
    'qualitative research',
    'pesquisa qualitativa',
    'quantitative research',
    'pesquisa quantitativa',
    'interface',
    'product delivery',
    'handoff',
    'typography',
    'tipografia',
    'product strategy',
    'estratégia',
    'user flows',
    'user stories',
    'visual design',
    'prototyping',
    'protótipo',
    'design system',
    'user research',
    'pesquisa com usuário',
    'mobile',
    'design sprint',
    'interaction design',
    'design thinking',
    'user interview',
    'information architecture',
    'customer journey map',
    'heuristics analysis',
    'wireframing',
    'workshop facilitation',
    'data informed design'
  ],
  publisher: 'Vercel',
  openGraph: {
    type: 'website',
    description: 'Portfolio de Gabriel Chelles contendo todos os seus projetos',
    siteName: 'Gabriel Chelles Product Designer',
    title: 'Gabriel Chelles',
    url: process.env.DOMAIN
  },

  metadataBase: new URL(process.env.DOMAIN!)
}

export const viewport: Viewport = {
  themeColor: '#000'
}

export const revalidate = process.env.REVALIDATE_TIME

const getFooter = async () => {
  const data: FooterProps = await hygraph.request(FOOTER)
  if (!data) throw Error('Error to fetch Footer data!')
  return data.footers[0]
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const data = await getFooter()
  return (
    <html lang="pt-br">
      <head>
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
