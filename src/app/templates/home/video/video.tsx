'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'

type VideoProps = {
  url?: string
}

export const Video = ({ url }: VideoProps) => {
  return (
    <>
      {!!url && (
        <Container ignorePaddingOnMobile>
          <S.Wrapper
            variants={fadeIn(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <iframe
              width="560"
              height="315"
              src={`${url}&autoplay=1&mute=1&loop=1&controls=0`}
              title="YouTube video player"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute; loop; controls"
              allowFullScreen></iframe>
          </S.Wrapper>
        </Container>
      )}
    </>
  )
}
