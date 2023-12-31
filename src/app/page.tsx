import { hygraph } from './graphql/client'
import { HOME } from './graphql/queries'
import { HomeData, HomeProps } from './graphql/types'
import { convertProjectDataToProjectCardProps } from './services/project'
import { Hero } from './templates/home/hero'
import { Projects } from './templates/home/projects'
import { Video } from './templates/home/video'

export const revalidate = process.env.REVALIDATE_TIME

const getHomeData = async () => {
  const data: HomeProps = await hygraph.request(HOME)
  if (!data) throw new Error('Error to fetch home data')
  return data.homes[0]
}

const getProjects = (data: HomeData) => {
  return convertProjectDataToProjectCardProps(data.projects)
}

export default async function Home() {
  const homeData = await getHomeData()
  const projectData = getProjects(homeData)

  return (
    <main>
      <Hero
        greeting={homeData?.greeting}
        name={homeData?.name}
        introductionStart={homeData?.introductionStart}
        highlight={homeData?.highlight}
        introductionEnd={homeData?.introductionEnd}
        color={homeData.highlightColor.hex}
        contact={homeData!.contact}
      />
      <Video url={homeData?.videoLink} />
      <Projects projects={projectData} />
    </main>
  )
}
