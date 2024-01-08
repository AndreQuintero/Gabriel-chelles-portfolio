'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'
import { Social } from '@/app/components/social'
import { ContactProps, LinkData } from '@/app/graphql/types'

type HeroProps = {
  greeting?: string
  name?: string
  introductionStart?: string
  highlight?: LinkData
  introductionEnd?: string
  contact: ContactProps
  color: string
}

export const Hero = ({
  greeting = '',
  name = '',
  introductionStart = '',
  highlight,
  color,
  introductionEnd = '',
  contact
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
          {introductionStart}{' '}
          {highlight && (
            <S.Highlight
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              $color={color}>
              {' '}
              {highlight.text}{' '}
            </S.Highlight>
          )}{' '}
          {introductionEnd}
        </S.Description>
        <S.SocialWrapper
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <Social {...contact} />
        </S.SocialWrapper>
      </Container>
    </S.HeroSection>
  )
}
