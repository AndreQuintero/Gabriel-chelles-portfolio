'use client'
import { Container } from '@/app/components/container'
import * as S from './style'

export const Goals = () => {
  return (
    <Container>
      <S.Wraper>
        <S.Details $position="left">
          <S.Title>Objetivos</S.Title>
          <S.List>
            <S.Item>Criar um marketplace.</S.Item>
            <S.Item>Preservar a experiência física.</S.Item>
            <S.Item>
              Entender novos comportamentos de compra durante a pandemia.
            </S.Item>
            <S.Item>Identificar novas possibilidades para o negócio.</S.Item>
          </S.List>
        </S.Details>
        <S.Details $position="right">
          <S.Title>Resultados</S.Title>
          <S.List>
            <S.Item>
              Marketplace integrado com uma experiência física do shopping.
            </S.Item>
            <S.Item>
              Mais de 60 lojistas participando no dia que foi anunciado.
            </S.Item>
            <S.Item>
              Entendimento sobre o público do Guatemi e seu comportamento de
              consumo durante a pandemia.
            </S.Item>
          </S.List>
        </S.Details>
      </S.Wraper>
    </Container>
  )
}
