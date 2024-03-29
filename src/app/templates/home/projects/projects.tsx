'use client'

import { Container } from '@/app/components/container'

import * as S from './style'
import { Button } from '@/app/components/button'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectCardProps } from '@/app/components/project-card'
import { Routes } from '@/app/routes'
import { useRouter } from 'next/navigation'

export type ProjectProps = {
  projects: Array<ProjectCardProps>
  totalProjects?: number
}

export const Projects = ({ projects, totalProjects }: ProjectProps) => {
  const router = useRouter()
  const totalProjectsHome = projects.length
  return (
    <S.Wrapper>
      <Container>
        <ProjectsList projects={projects} />
        {!!totalProjects && totalProjects > totalProjectsHome && (
          <S.MoreProjects>
            <Button
              colorScheme="secondary"
              onClick={() => router.push(Routes.PROJECTS)}>
              Ver todos os {totalProjects} projetos
            </Button>
          </S.MoreProjects>
        )}
      </Container>
    </S.Wrapper>
  )
}
