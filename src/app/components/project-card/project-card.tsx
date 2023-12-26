import { Routes } from '@/app/routes'
import { ProjectImage } from '../project-image'
import * as S from './style'

export type ImageProps = {
  url: string
  description: string
}

export type ProjectCardProps = {
  title: string
  slug: string
  images: Array<ImageProps>
}

export const ProjectCard = ({ title, slug, images }: ProjectCardProps) => {
  return (
    <S.Wrapper href={`${Routes.PROJECTS}/${slug}`}>
      <ProjectImage images={images} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}
