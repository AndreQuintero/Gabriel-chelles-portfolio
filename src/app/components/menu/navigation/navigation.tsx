import { Routes } from '@/app/routes'
import * as S from './style'
import { usePathname } from 'next/navigation'

type NavigationProps = {
  isMobile?: boolean
  setVisibility?: (visible: boolean) => void
}

export const Navigation = ({ isMobile, setVisibility }: NavigationProps) => {
  const pathname = usePathname()
  const closeMenuMobile = () => {
    if (isMobile && setVisibility) {
      setVisibility(false)
    }
  }
  const isActive = (route: string) => pathname === route

  return (
    <S.Nav>
      <S.LinksList>
        {isMobile && (
          <li onClick={closeMenuMobile}>
            <S.Link href={Routes.HOME} $isActive={isActive(Routes.HOME)}>
              Home
            </S.Link>
          </li>
        )}
        <li onClick={closeMenuMobile}>
          <S.Link href={Routes.PROJECTS} $isActive={isActive(Routes.PROJECTS)}>
            Projetos
          </S.Link>
        </li>
        <li onClick={closeMenuMobile}>
          <S.Link href="#">Sobre</S.Link>
        </li>
        {!isMobile && (
          <li>
            <S.Link href="#contact" $isActive={false}>
              Contato
            </S.Link>
          </li>
        )}
      </S.LinksList>
    </S.Nav>
  )
}
