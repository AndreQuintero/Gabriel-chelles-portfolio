'use client'
import { NextPage } from '@/app/components/next-page'
import * as S from './style'
import { Container } from '@/app/components/container'
import { ImageData } from '@/app/graphql/types'

export type NextPageProps = {
  color: string
  text?: 'light' | 'dark'
  slug: string
  title: string
  image: ImageData
}
export const NextPageSession = ({ text = 'dark', ...props }: NextPageProps) => {
  return (
    <S.Wrapper>
      <Container ignorePaddingOnMobile>
        <NextPage text={text} {...props} />
      </Container>
    </S.Wrapper>
  )
}
