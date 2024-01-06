import { useViewDetect } from '@/app/hooks/useViewDetect'
import { CompanyCard } from '../company-card'
import { Container } from '../container'
import { ShowCaseSlider } from '../showcase-slider'

import * as S from './style'
import { ImageData } from '@/app/graphql/types'

export type ShowcaseProps = {
  companies: Array<ImageData>
}

export const Showcase = ({ companies }: ShowcaseProps) => {
  const { isMobile } = useViewDetect()
  return (
    <>
      {isMobile ? (
        <Container ignoreRightPadding>
          <ShowCaseSlider companies={companies} />
        </Container>
      ) : (
        <Container>
          <S.ShowcaseGrid>
            {companies.map((company) => (
              <CompanyCard
                key={company.description}
                imagem={company.imagem}
                description={company.description}
              />
            ))}
          </S.ShowcaseGrid>
        </Container>
      )}
    </>
  )
}
