import { useViewDetect } from '@/app/hooks/useViewDetect'
import { CompanyCard, CompanyCardProps } from '../company-card'
import { Container } from '../container'
import { ShowCaseSlider } from '../showcase-slider'

import * as S from './style'

export type ShowcaseProps = {
  companies: Array<CompanyCardProps>
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
                key={company.companyName}
                url={company.url}
                companyName={company.companyName}
              />
            ))}
          </S.ShowcaseGrid>
        </Container>
      )}
    </>
  )
}
