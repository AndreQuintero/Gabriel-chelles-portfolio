'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { fadeIn } from '@/app/motion'

export const Hero = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          Transformando a experiência de compras no Shopping Iguatemi Fortaleza
        </S.Title>
        <S.Subtitle
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          Construindo um Marketplace inovador em sintonia com o “Novo Normal”
          durante/pós pandemia e elevando o padrão de atendimento ao cliente.
        </S.Subtitle>
        <S.VisitWrapper
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <S.Text>Acesse o site</S.Text>
          <S.Link href="https://www.iguatemifortaleza.com.br/" target="_blank">
            https://www.iguatemifortaleza.com.br/
          </S.Link>
        </S.VisitWrapper>
      </Container>
    </S.Wrapper>
  )
}
