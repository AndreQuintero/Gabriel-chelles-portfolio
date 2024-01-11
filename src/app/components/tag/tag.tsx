import { ReactNode } from 'react'
import * as S from './style'

type TagProps = {
  children: ReactNode
}
export const Tag = ({ children }: TagProps) => {
  return (
    <S.Wrapper>
      <S.label>{children}</S.label>
    </S.Wrapper>
  )
}
