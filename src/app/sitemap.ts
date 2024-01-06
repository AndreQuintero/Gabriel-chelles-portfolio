import { MetadataRoute } from 'next'
import { hygraph } from './graphql/client'
import { PROJECTS } from './graphql/queries'
import { ProjectProps } from './templates/home/projects/projects'
import { Routes } from './routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data: ProjectProps = await hygraph.request(PROJECTS)

  if (!data) throw new Error('Error to fetch projects on sitemap.ts')

  const projects = data.projects.map((project) => ({
    url: `${process.env.DOMAIN}${Routes.PROJECTS}/${project.slug}`,
    lastModified: new Date(project.updatedAt!).toISOString()
  }))

  const routes = Object.values(Routes).map((route) => ({
    url: `${process.env.DOMAIN}${route}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes, ...projects]
}
