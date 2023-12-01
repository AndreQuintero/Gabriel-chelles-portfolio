'use client'
import { ReactNode } from 'react'
import * as S from './style'

type ContainerProps = {
  children: ReactNode
  ignorePaddingOnMobile?: boolean
}
export const Container = ({
  children,
  ignorePaddingOnMobile = false
}: ContainerProps) => (
  <S.Container ignorePaddingOnMobile={ignorePaddingOnMobile}>
    {children}
  </S.Container>
)
