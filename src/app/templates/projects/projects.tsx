'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectProps } from '../home/projects/projects'

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </S.Wrapper>
  )
}
