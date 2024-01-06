import { ImageData } from '@/app/graphql/types'
import * as S from './style'

export const CompanyCard = ({ imagem, description }: ImageData) => {
  return (
    <S.Wrapper>
      <S.Image loading="lazy" src={imagem.url} alt={description} />
    </S.Wrapper>
  )
}
