'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { List } from '@/app/components/list'
import { TextGrid } from '@/app/components/text-grid'
import { fadeIn } from '@/app/motion'
import { RichTextEditorData } from '@/app/graphql/types'

type GoalsProps = {
  goals: Array<string>
  results: Array<RichTextEditorData>
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
              Goals
            </S.Title>
            <List space="small" items={goals} />
          </S.Details>
          <S.Details $position="right">
            <S.Title
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              Results
            </S.Title>
            <List space="small" items={results} />
          </S.Details>
        </TextGrid>
      </S.Wraper>
    </Container>
  )
}
