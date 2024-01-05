'use client'
import * as S from './style'

type BannerProps = {
  url: string
}
export const Banner = ({ url }: BannerProps) => {
  return <S.Banner $url={url} />
}
