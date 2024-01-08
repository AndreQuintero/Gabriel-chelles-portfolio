'use client'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useMenuVisibility, useViewDetect } from '@/app/hooks'
import * as S from './style'

import { Navigation } from './navigation'
import { MenuIconOpened, MenuItemClosed } from './menu-icon'
import { Contact } from '../contact'
import { Link } from '../link'
import { Routes } from '@/app/routes'
import { ContactProps } from '@/app/graphql/types'

const Menu = ({ ...props }: ContactProps) => {
  const { isMobile } = useViewDetect()
  const { colors } = useTheme()
  const { isVisible, setVisibility } = useMenuVisibility()

  const toggleMenu = () => setVisibility(!isVisible)

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'visible'
  }, [isVisible])

  return (
    <>
      <S.Header>
        <Link href={Routes.HOME} onClick={() => setVisibility(false)}>
          <S.PortfolioName>Gabriel Chelles</S.PortfolioName>
        </Link>
        {!isMobile && isMobile !== undefined && (
          <Navigation isMobile={isMobile} />
        )}
        {isMobile && (
          <div onClick={toggleMenu}>
            {!isVisible ? (
              <MenuIconOpened color={colors.secondary} />
            ) : (
              <MenuItemClosed color={colors.secondary} />
            )}
          </div>
        )}
      </S.Header>
      <AnimatePresence>
        {isVisible && <MenuMobile {...props} />}
      </AnimatePresence>
    </>
  )
}

type MenuMobileProps = {} & ContactProps

const MenuMobile = ({ ...props }: MenuMobileProps) => {
  return (
    <S.MenuMobile
      key="menu"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, ease: 'easeIn' }}
      exit={{ opacity: 0, y: -200 }}>
      <Navigation isMobile />
      <S.ContactWrapper>
        <Contact {...props} />
      </S.ContactWrapper>
    </S.MenuMobile>
  )
}

export { Menu }
