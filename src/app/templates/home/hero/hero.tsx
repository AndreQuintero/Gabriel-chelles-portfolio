'use client'
import { Container } from '@/app/components/container'
import * as S from './style'

export const Hero = () => {
  return (
    <S.HeroSection>
      <Container>
        <S.Apresentation>
          Hey! sou <S.Name> Gabriel Chelles</S.Name>
        </S.Apresentation>
        <S.Description>
          Product Designer atualmente ajudando a{' '}
          <S.Highlight> Gamers Club </S.Highlight> a se tornar a maior empresa
          de esports do mundo!🤘
        </S.Description>
      </Container>
    </S.HeroSection>
  )
}
