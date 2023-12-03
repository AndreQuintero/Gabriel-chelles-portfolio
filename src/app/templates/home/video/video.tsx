'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'

export const Video = () => {
  return (
    <Container ignorePaddingOnMobile>
      <S.Wrapper
        variants={fadeIn(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/voTI0qi5dLU?si=M96Fv0HsjBk-66yQ&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute"
          allowFullScreen></iframe>
      </S.Wrapper>
    </Container>
  )
}
