import { hygraph } from './graphql/client'
import { NOT_FOUND } from './graphql/queries'
import { NotFoundData, NotFoundProps } from './graphql/types'
import { convertProjectDataToProjectCardProps } from './services/project'
import { Hero } from './templates/not-found/hero'
import { Projects } from './templates/not-found/projects'

export const revalidate = process.env.REVALIDATE_TIME

const getNotFoundData = async () => {
  const data: NotFoundProps = await hygraph.request(NOT_FOUND)
  if (!data) throw new Error('Error to fetch Not found data in cms.')
  return data.notFounds[0]
}

const getProjects = (data: NotFoundData) => {
  return convertProjectDataToProjectCardProps(data.projects)
}

export default async function NotFound() {
  const data = await getNotFoundData()
  const projects = getProjects(data)
  return (
    <>
      <Hero title={data.title} text={data.text} />
      <Projects projects={projects} />
    </>
  )
}
