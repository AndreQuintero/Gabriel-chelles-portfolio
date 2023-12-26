import { fadeIn } from '@/app/motion'
import { ProjectCard, ProjectCardProps } from '../project-card'
import * as S from './style'
type ProjectListProps = {
  projects: Array<ProjectCardProps>
}

export const ProjectsList = ({ projects }: ProjectListProps) => {
  return (
    <S.MosaicGrid>
      {projects.map((project, index) => (
        <S.ProjectCardWrapper
          key={`${project.title}-${index}`}
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <ProjectCard
            images={project.images}
            slug={project.slug}
            title={project.title}
          />
        </S.ProjectCardWrapper>
      ))}
    </S.MosaicGrid>
  )
}
