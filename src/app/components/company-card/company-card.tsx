import * as S from './style'

export type CompanyCardProps = {
  url: string
  companyName: string
}

export const CompanyCard = ({ url, companyName }: CompanyCardProps) => {
  return (
    <S.Wrapper>
      <S.Image loading="lazy" src={url} alt={companyName} />
    </S.Wrapper>
  )
}
