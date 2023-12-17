'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { TextGrid } from '@/app/components/text-grid'
import { fadeIn } from '@/app/motion'

export const Summary = () => {
  return (
    <Container>
      <S.Wrapper>
        <TextGrid>
          <S.Description
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            Inaugurado em 1982, o Iguatemi Fortaleza é um dos maiores shoppings
            do Ceará e é referência em inovação na região. Com mais de 450
            lojas, o shopping sofreu com o impacto de uma pandemia e buscou se
            digitalizar para conseguir se manter de pé nesse novo cenário
            mundial.
          </S.Description>
          <S.DetailsWrapper>
            <S.Details>
              <S.Title
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                Minha função
              </S.Title>
              <S.Information
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                UX Designer com foco em pesquisas e definição estratégica do
                produto.
              </S.Information>
            </S.Details>
            <S.Details>
              <S.Title
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                Ano do projeto
              </S.Title>
              <S.Information
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                2020/2021
              </S.Information>
            </S.Details>
          </S.DetailsWrapper>
        </TextGrid>
      </S.Wrapper>
    </Container>
  )
}
