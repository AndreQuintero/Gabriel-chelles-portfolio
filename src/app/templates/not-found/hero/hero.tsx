'use client'
import { Container } from '@/app/components/container'
import * as S from './style'

type HeroProps = {
  title?: string
  text?: string
}

export const Hero = ({ title = '', text = '' }: HeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Hero>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </S.Hero>
      </Container>
    </S.Wrapper>
  )
}
