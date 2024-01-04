'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'
import { Social } from '@/app/components/social'

type HeroProps = {
  greeting?: string
  name?: string
  introductionStart?: string
  highlight?: string
  introductionEnd?: string
}

export const Hero = ({
  greeting = '',
  name = '',
  introductionStart = '',
  highlight = '',
  introductionEnd = ''
}: HeroProps) => {
  return (
    <S.HeroSection>
      <Container>
        <S.Apresentation
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {greeting} <S.Name> {name} </S.Name>
        </S.Apresentation>
        <S.Description
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {introductionStart} <S.Highlight> {highlight} </S.Highlight>{' '}
          {introductionEnd}
        </S.Description>
        <S.SocialWrapper
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <Social />
        </S.SocialWrapper>
      </Container>
    </S.HeroSection>
  )
}
