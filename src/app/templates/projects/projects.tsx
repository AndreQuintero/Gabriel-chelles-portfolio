'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { ProjectsList } from '@/app/components/projects-list'
import { ProjectProps } from '../home/projects'
import { fadeIn } from '@/app/motion'

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title
          variants={fadeIn(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          Projetos
        </S.Title>
        <ProjectsList projects={projects} />
      </Container>
    </S.Wrapper>
  )
}
