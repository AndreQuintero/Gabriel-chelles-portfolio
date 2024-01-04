import { ImageProps, ProjectCardProps } from './components/project-card'
import { hygraph } from './graphql/client'
import { HOME, PROJECTS_FIRST_FOUR } from './graphql/queries'
import { HomeProps, ProjectsProps } from './graphql/types'
import { Hero } from './templates/home/hero'
import { Projects } from './templates/home/projects'
import { Video } from './templates/home/video'

export const revalidate = 3600

const getHomeData = async () => {
  const data: HomeProps = await hygraph.request(HOME)
  if (!data) return null
  return data.homes[0]
}

const getProjects = async () => {
  const data: ProjectsProps = await hygraph.request(PROJECTS_FIRST_FOUR)
  const projects: ProjectCardProps[] = data?.projects?.map((project) => {
    const images: ImageProps[] = project?.imagesThumb?.map((image) => {
      return {
        url: image?.imagem?.url,
        description: image.description
      }
    })
    return {
      slug: project.slug,
      title: project.title,
      images
    }
  })
  return projects
}

export default async function Home() {
  const homeData = await getHomeData()
  const projectData = await getProjects()
  const totalProjects = projectData.length
  return (
    <main>
      <Hero
        greeting={homeData?.greeting}
        name={homeData?.name}
        introductionStart={homeData?.introductionStart}
        highlight={homeData?.highlight}
        introductionEnd={homeData?.introductionEnd}
      />
      <Video url={homeData?.videoLink} />
      <Projects projects={projectData} totalProjects={totalProjects} />
    </main>
  )
}
