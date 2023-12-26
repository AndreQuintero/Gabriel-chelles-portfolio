'use client'

import { Container } from '@/app/components/container'

import * as S from './style'
import { Button } from '@/app/components/button'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectCardProps } from '@/app/components/project-card'
import { Link } from '@/app/components/link'
import { Routes } from '@/app/routes'

export type ProjectProps = {
  projects: Array<ProjectCardProps>
}

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <ProjectsList projects={projects} />
        <S.MoreProjects>
          <Link href={Routes.PROJECTS}>
            <Button colorScheme="secondary">Ver todos os 12 projetos</Button>
          </Link>
        </S.MoreProjects>
      </Container>
    </S.Wrapper>
  )
}
