'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { ImageData } from '@/app/graphql/types'
import { Tag } from '@/app/components/tag'
import { fadeIn } from '@/app/motion'

type HeroProps = {
  title?: string
  picture?: ImageData
  description?: Array<string>
}
export const Hero = ({ title, picture, description = [] }: HeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.GridHero>
          <S.Title
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            {title}
          </S.Title>
          {!!picture && (
            <S.PictureWrapper
              variants={fadeIn(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              <S.Picture
                src={picture.imagem.url}
                alt={picture.description}
                fill
              />
            </S.PictureWrapper>
          )}
          <S.DescriptionWrapper
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            {description.map((text, index) => (
              <S.Description key={`${text}-${index}`}>{text}</S.Description>
            ))}
          </S.DescriptionWrapper>
        </S.GridHero>
      </Container>
    </S.Wrapper>
  )
}
