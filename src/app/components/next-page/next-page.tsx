import { NextPageProps } from '@/app/templates/project/next-page'
import * as S from './style'
import { Link } from '../link'
import { Routes } from '@/app/routes'

export const NextPage = ({
  color,
  text,
  image,
  slug,
  title
}: NextPageProps) => {
  return (
    <Link href={`${Routes.PROJECTS}/${slug}`}>
      <S.Wrapper $text={text!} $color={color}>
        <S.TextWrapper>
          <S.SubTitle>Next Project</S.SubTitle>
          <S.Title>{title}</S.Title>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image fill alt={image.description} src={image.imagem.url} />
        </S.ImageWrapper>
      </S.Wrapper>
    </Link>
  )
}
