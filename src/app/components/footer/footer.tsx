'use client'

import { FooterData } from '@/app/graphql/types'
import { ChangeTheme } from '../change-theme'
import { Contact } from '../contact'
import { Container } from '../container'
import { Showcase } from '../showcase'
import * as S from './style'

export const Footer = ({ title, subtitle, companies, contact }: FooterData) => {
  return (
    <S.Footer>
      <ChangeTheme>
        <Container>
          <S.Title>{title}</S.Title>

          <S.Showcase>{subtitle}</S.Showcase>
        </Container>
        <Showcase companies={companies} />
        <Container>
          <S.ContactWrapper>
            <Contact {...contact} />
          </S.ContactWrapper>
        </Container>
      </ChangeTheme>
    </S.Footer>
  )
}
