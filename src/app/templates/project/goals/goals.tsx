'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { List } from '@/app/components/list'
import { TextGrid } from '@/app/components/text-grid'
import { fadeIn } from '@/app/motion'

type GoalsProps = {
  goals: Array<string>
  results: Array<string>
}

export const Goals = ({ goals, results }: GoalsProps) => {
  return (
    <Container>
      <S.Wraper>
        <TextGrid>
          <S.Details $position="left">
            <S.Title
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              Objetivos
            </S.Title>
            <List space="small" items={goals} />
          </S.Details>
          <S.Details $position="right">
            <S.Title
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              Resultados
            </S.Title>
            <List space="small" items={results} />
          </S.Details>
        </TextGrid>
      </S.Wraper>
    </Container>
  )
}
