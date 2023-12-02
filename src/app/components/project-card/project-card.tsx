'use client'
import Thumbnail from '@/app/assets/projects/thumbnail.png'

import * as S from './style'
import { CustomCursor, WithCustomCursor } from '../custom-cursor'

const ProjectCard = ({ onMouseMove }: CustomCursor) => {
  return (
    <S.Wrapper onMouseMove={onMouseMove}>
      <S.ProjectImage src={Thumbnail} alt="Projeto 1" />
    </S.Wrapper>
  )
}

export default WithCustomCursor(ProjectCard)
