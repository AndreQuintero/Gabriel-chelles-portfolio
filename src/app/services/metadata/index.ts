import { hygraph } from '@/app/graphql/client'
import { METATAGS } from '@/app/graphql/queries'
import { IconData, MetatagProps } from '@/app/graphql/types'
import { Metadata } from 'next'

export const transformIcons = (icons: Array<IconData>) => {
  if (icons.length > 0) {
    return {
      icon: icons.map((icon) => ({
        url: icon?.icon?.url,
        href: icon?.icon?.url,
        sizes: icon.sizes,
        type: icon.type
      }))
    }
  } else {
    return { icon: {} }
  }
}

export const getMetaDataApi = async () => {
  const data: MetatagProps = await hygraph.request(METATAGS)
  if (!data) throw 'Error to fetch Metatag data!'
  return data.metatags[0]
}

export const getMetaData = async (): Promise<Metadata> => {
  const metatags = await getMetaDataApi()
  return {
    metadataBase: new URL(process.env.DOMAIN!),
    title: metatags.title,
    description: metatags.description,
    applicationName: metatags.applicationName,
    abstract: metatags.abstract,
    icons: transformIcons(metatags.icons).icon,
    appleWebApp: {
      title: metatags.appleWebAppTitle,
      statusBarStyle: metatags.appleWebAppStatusBarStyle,
      startupImage: {
        url: metatags?.appleWebAppStartupImage?.url
      }
    },
    authors: {
      name: metatags.authorName,
      url: metatags.authorUrl
    },
    category: metatags.category,
    creator: metatags.creator,
    generator: metatags.generator,
    keywords: metatags.keywords,
    publisher: metatags.publisher,
    openGraph: {
      type: metatags.openGraphType,
      description: metatags.openGraphDescription,
      siteName: metatags.openGraphSiteName,
      title: metatags.openGraphTitle,
      url: process.env.DOMAIN,
      images: [
        {
          url: metatags?.openGraphImage?.url
        }
      ],
      countryName: metatags.openGraphCountryName,
      emails: metatags.openGraphEmails
    }
  }
}
