'use client'
import { Container } from '@/app/components/container'
import * as S from './style'
import { TextGrid } from '@/app/components/text-grid'
import { fadeIn } from '@/app/motion'

type SummaryProps = {
  description: string
  myRole: string
  projectYear: string
}

export const Summary = ({ description, myRole, projectYear }: SummaryProps) => {
  return (
    <Container>
      <S.Wrapper>
        <TextGrid>
          <S.Description
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            {description}
          </S.Description>
          <S.DetailsWrapper>
            <S.Details>
              <S.Title
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                My role
              </S.Title>
              <S.Information
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                {myRole}
              </S.Information>
            </S.Details>
            <S.Details>
              <S.Title
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                Project year
              </S.Title>
              <S.Information
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                {projectYear}
              </S.Information>
            </S.Details>
          </S.DetailsWrapper>
        </TextGrid>
      </S.Wrapper>
    </Container>
  )
}
