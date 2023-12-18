'use client'
import { NextPage } from '@/app/components/next-page'
import * as S from './style'
import { Container } from '@/app/components/container'

export type NextPageProps = {
  color: string
  text?: 'light' | 'dark'
}
export const NextPageSession = ({ color, text = 'dark' }: NextPageProps) => {
  return (
    <S.Wrapper>
      <Container ignorePaddingOnMobile>
        <NextPage color={color} text={text} />
      </Container>
    </S.Wrapper>
  )
}
