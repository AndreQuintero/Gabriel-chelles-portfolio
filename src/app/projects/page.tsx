import { hygraph } from '../graphql/client'
import { PROJECTS } from '../graphql/queries'
import { ProjectsProps } from '../graphql/types'
import { convertProjectDataToProjectCardProps } from '../services/project'
import { Projects } from '../templates/projects'

export const revalidate = process.env.REVALIDATE_TIME

const getProjects = async () => {
  const data: ProjectsProps = await hygraph.request(PROJECTS)
  return convertProjectDataToProjectCardProps(data.projects)
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <main>
      <Projects projects={projects} />
    </main>
  )
}
