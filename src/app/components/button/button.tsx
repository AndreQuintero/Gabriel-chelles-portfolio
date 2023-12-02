'use client'
import { ReactNode } from 'react'
import * as S from './style'

import { DownloadIcon, LinkedinIcon } from '@/app/assets/icons'

type ButtonProps = {
  children: ReactNode
  type: 'primary' | 'secondary'
  icon?: 'linkedin' | 'download'
}

const Icons = {
  linkedin: <LinkedinIcon />,
  download: <DownloadIcon />
}

export const Button = ({ children, type, icon }: ButtonProps) => {
  return (
    <S.Button type={type}>
      {!!icon && Icons[icon]} {children}
    </S.Button>
  )
}

type IconProps = { color: string }
