'use client'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectProps } from '../../home/projects'
import * as S from './style'
import { Container } from '@/app/components/container'

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </S.Wrapper>
  )
}
