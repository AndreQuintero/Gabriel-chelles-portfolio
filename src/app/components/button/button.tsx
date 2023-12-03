'use client'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import * as S from './style'

import { DownloadIcon, LinkedinIcon } from '@/app/assets/icons'

type ButtonProps = {
  children: ReactNode
  colorScheme: 'primary' | 'secondary'
  icon?: 'linkedin' | 'download'
} & ButtonHTMLAttributes<HTMLButtonElement>

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

type IconProps = { color: string }
