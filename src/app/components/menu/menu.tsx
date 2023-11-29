'use client'
import { useViewDetect } from '@/app/hooks/useViewDetect'
import * as S from './style'

const Menu = () => {
  const { isMobile } = useViewDetect()
  return (
    <S.Header>
      <S.PortfolioName>Gabriel Chelles</S.PortfolioName>
      <nav>
        <S.LinksList>
          <li>
            <S.Link href="#">Projetos</S.Link>
          </li>
          <li>
            <S.Link href="#">Sobre</S.Link>
          </li>
        </S.LinksList>
      </nav>
    </S.Header>
  )
}

export { Menu }
