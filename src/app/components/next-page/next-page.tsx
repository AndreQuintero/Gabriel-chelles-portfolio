import { NextPageProps } from '@/app/templates/project/next-page'
import * as S from './style'
import { Link } from '../link'
import { Routes } from '@/app/routes'

export const NextPage = ({ color, text }: NextPageProps) => {
  return (
    <Link href={`${Routes.PROJECTS}/iguatemi`}>
      <S.Wrapper $text={text!} $color={color}>
        <S.TextWrapper>
          <S.SubTitle>Próximo projeto</S.SubTitle>
          <S.Title>Foco, calma e produtividade com o app da Setta</S.Title>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image
            fill
            alt="next project"
            src="https://s3-alpha-sig.figma.com/img/d167/748f/775c0cbf942b15f361a9b846417bf95c?Expires=1704067200&Signature=oA4coGZPK2IR6ceHX6CQSP86SjJfQRUz1bito5cDSA4lB2TPHVJTOTk~XYiwmCSN1dIxjUQM740AEKmy6EJ6Rov6SMf0Fb8NbFIELwUw6IO~NMKn2u7OBNkg8eo5qRvFA8omKAtj9yQrntFHPG~cyx9nMbwfM~pqx63jFUVqs95NpCgF7FHxBgYf9IgVkIcP5VFv-KUJ2nHvE7xAj2nEUs~4cm3XAnFYrqfAyubUECj-OQfSDopUyIdrH3SRLe3G5ExVcnLNsVNm0cw4nHwzgeEF0P0MXbIMP0XsdUP2hT3hOvvEkl5y7Zl4y5rlTfQlFndBjLsvFXEDtPMykquN~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </Link>
  )
}
