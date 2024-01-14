import { Metadata } from 'next'
import { hygraph } from '../graphql/client'
import { ABOUT } from '../graphql/queries'
import { AboutProps } from '../graphql/types'
import { Hero } from '../templates/about/hero'
import { Tags } from '../templates/about/tags'
import { getMetaData } from '../services/metadata'

export const revalidate = process.env.REVALIDATE_TIME

export const generateMetadata = async (): Promise<Metadata> => getMetaData()

const getAbout = async () => {
  const data: AboutProps = await hygraph.request(ABOUT)
  if (!data) throw new Error('Error to fetch about data!')
  return data.abouts[0]
}

export default async function About() {
  const data = await getAbout()
  return (
    <>
      <Hero
        title={data.title}
        description={data.description}
        picture={data.picture}
      />
      <Tags tags={data.tags} />
    </>
  )
}
