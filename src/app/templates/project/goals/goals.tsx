'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { List } from '@/app/components/list'
import { TextGrid } from '@/app/components/text-grid'

export const Goals = () => {
  return (
    <Container>
      <S.Wraper>
        <TextGrid>
          <S.Details $position="left">
            <S.Title>Objetivos</S.Title>
            <List
              space="small"
              items={[
                'Criar um marketplace.',
                'Preservar a experiência física.',
                'Entender novos comportamentos de compra durante a pandemia.',
                'Identificar novas possibilidades para o negócio.'
              ]}
            />
          </S.Details>
          <S.Details $position="right">
            <S.Title>Resultados</S.Title>
            <List
              space="small"
              items={[
                'Marketplace integrado com uma experiência física do shopping.',
                'Mais de 60 lojistas participando no dia que foi anunciado.',
                'Entendimento sobre o público do Guatemi e seu comportamento de consumo durante a pandemia.'
              ]}
            />
          </S.Details>
        </TextGrid>
      </S.Wraper>
    </Container>
  )
}