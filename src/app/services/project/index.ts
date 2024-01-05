import { ImageProps, ProjectCardProps } from '@/app/components/project-card'
import { ProjectData } from '@/app/graphql/types'

export const convertProjectDataToProjectCardProps = (data: ProjectData[]) => {
  const projects: ProjectCardProps[] = data?.map((project) => {
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
