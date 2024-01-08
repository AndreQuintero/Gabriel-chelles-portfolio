import { Routes } from '@/app/routes'
import * as S from './style'
import { usePathname } from 'next/navigation'
import { useMenuVisibility } from '@/app/hooks'

type NavigationProps = {
  isMobile?: boolean
}

export const Navigation = ({ isMobile }: NavigationProps) => {
  const pathname = usePathname()
  const { setVisibility } = useMenuVisibility()
  const isActive = (route: string) => pathname === route
  const closeMenuMobile = () => setVisibility(false)

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
