import { Routes } from '@/app/routes'
import * as S from './style'

type NavigationProps = {
  isMobile?: boolean
}

export const Navigation = ({ isMobile }: NavigationProps) => {
  return (
    <S.Nav>
      <S.LinksList>
        {isMobile && (
          <li>
            <S.Link href={Routes.HOME}>Home</S.Link>
          </li>
        )}
        <li>
          <S.Link href="#">Projetos</S.Link>
        </li>
        <li>
          <S.Link href="#">Sobre</S.Link>
        </li>
      </S.LinksList>
    </S.Nav>
  )
}
