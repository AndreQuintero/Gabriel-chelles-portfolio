'use client'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'
import * as S from './style'

import { DownloadIcon, LinkedinIcon } from '@/app/assets/icons'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  children: ReactNode
  colorScheme: 'primary' | 'secondary'
  icon?: 'linkedin' | 'download'
  as?: ElementType
} & ButtonTypes

const Icons = {
  linkedin: <LinkedinIcon />,
  download: <DownloadIcon />
}

export const Button = ({
  children,
  colorScheme,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Button $colorScheme={colorScheme} {...props}>
      {!!icon && Icons[icon]} {children}
    </S.Button>
  )
}
