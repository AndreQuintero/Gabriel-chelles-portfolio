'use client'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useViewDetect } from '@/app/hooks/useViewDetect'
import * as S from './style'

import { Navigation } from './navigation'
import { MenuIconOpened, MenuItemClosed } from './menu-icon'
import { Contact } from '../contact'

const Menu = () => {
  const { isMobile } = useViewDetect()
  const { colors } = useTheme()
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'hidden' : 'visible'
  }, [isMenuVisible])
  return (
    <>
      <S.Header>
        <S.PortfolioName>Gabriel Chelles</S.PortfolioName>
        {!isMobile && isMobile !== undefined && (
          <Navigation isMobile={isMobile} />
        )}
        {isMobile && (
          <div onClick={toggleMenu}>
            {!isMenuVisible ? (
              <MenuIconOpened color={colors.secondary} />
            ) : (
              <MenuItemClosed color={colors.secondary} />
            )}
          </div>
        )}
      </S.Header>
      <AnimatePresence>{isMenuVisible && <MenuMobile />}</AnimatePresence>
    </>
  )
}

const MenuMobile = () => {
  return (
    <S.MenuMobile
      key="menu"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, ease: 'easeIn' }}
      exit={{ opacity: 0, y: -200 }}>
      <Navigation isMobile />
      <S.ContactWrapper>
        <Contact />
      </S.ContactWrapper>
    </S.MenuMobile>
  )
}

export { Menu }
