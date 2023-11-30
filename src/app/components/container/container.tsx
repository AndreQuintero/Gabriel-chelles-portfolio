'use client'
import { ReactNode } from 'react'
import * as S from './style'

type ContainerProps = {
  children: ReactNode
}
export const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
)
