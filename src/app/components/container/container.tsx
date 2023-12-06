'use client'
import { ReactNode } from 'react'
import * as S from './style'

type ContainerProps = {
  children: ReactNode
  ignorePaddingOnMobile?: boolean
  ignoreRightPadding?: boolean
}
export const Container = ({
  children,
  ignorePaddingOnMobile = false,
  ignoreRightPadding = false
}: ContainerProps) => (
  <S.Container
    $ignorePaddingOnMobile={ignorePaddingOnMobile}
    $ignoreRightPadding={ignoreRightPadding}>
    {children}
  </S.Container>
)
