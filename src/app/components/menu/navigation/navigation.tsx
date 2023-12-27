import { Routes } from '@/app/routes'
import * as S from './style'

type NavigationProps = {
  isMobile?: boolean
  setVisibility?: (visible: boolean) => void
}

export const Navigation = ({ isMobile, setVisibility }: NavigationProps) => {
  const closeMenuMobile = () => {
    if (isMobile && setVisibility) {
      setVisibility(false)
    }
  }
  return (
    <S.Nav>
      <S.LinksList>
        {isMobile && (
          <li onClick={closeMenuMobile}>
            <S.Link href={Routes.HOME}>Home</S.Link>
          </li>
        )}
        <li onClick={closeMenuMobile}>
          <S.Link href={Routes.PROJECTS}>Projetos</S.Link>
        </li>
        <li onClick={closeMenuMobile}>
          <S.Link href="#">Sobre</S.Link>
        </li>
      </S.LinksList>
    </S.Nav>
  )
}
