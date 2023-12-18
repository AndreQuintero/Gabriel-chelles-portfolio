import { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'
import * as S from './style'

type LinkProps = {
  children: ReactNode
} & NextLinkProps
export const Link = ({ children, ...props }: LinkProps) => {
  return <S.Link {...props}>{children}</S.Link>
}
