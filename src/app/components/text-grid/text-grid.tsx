import { ReactNode } from 'react'
import * as S from './style'

type TextGridProps = {
  children: ReactNode
}
export const TextGrid = ({ children }: TextGridProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
