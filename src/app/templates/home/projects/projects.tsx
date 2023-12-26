'use client'

import { Container } from '@/app/components/container'

import * as S from './style'
import { Button } from '@/app/components/button'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectCardProps } from '@/app/components/project-card'

export type ProjectProps = {
  projects: Array<ProjectCardProps>
}

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <ProjectsList projects={projects} />
        <S.MoreProjects>
          <Button colorScheme="secondary">Ver todos os 12 projetos</Button>
        </S.MoreProjects>
      </Container>
    </S.Wrapper>
  )
}
