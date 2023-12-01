'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { Button } from '@/app/components/button'
import { fadeIn } from '@/app/motion'

export const Hero = () => {
  return (
    <S.HeroSection>
      <Container>
        <S.Apresentation
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          Hey! sou <S.Name> Gabriel Chelles</S.Name>
        </S.Apresentation>
        <S.Description
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          Product Designer atualmente ajudando a{' '}
          <S.Highlight> Gamers Club </S.Highlight> a se tornar a maior empresa
          de esports do mundo!🤘
        </S.Description>
        <S.Buttons
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <Button type="primary" icon="linkedin">
            /gabrielChelles
          </Button>
          <Button type="primary" icon="download">
            Download CV
          </Button>
        </S.Buttons>
      </Container>
    </S.HeroSection>
  )
}
