'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'
import { LinkData } from '@/app/graphql/types'

type HeroProps = {
  title: string
  subtitle: string
  linkTitle: string
  link: LinkData
}
export const Hero = ({ title, subtitle, linkTitle, link }: HeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {title}
        </S.Title>
        <S.Subtitle
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {subtitle}
        </S.Subtitle>
        <S.VisitWrapper
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <S.Text>{linkTitle}</S.Text>
          <S.Link href={link.link} target="_blank">
            {link.text}
          </S.Link>
        </S.VisitWrapper>
      </Container>
    </S.Wrapper>
  )
}
