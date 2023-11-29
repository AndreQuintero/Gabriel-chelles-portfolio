import { useEffect, useState } from 'react'

export const useViewDetect = () => {
  const [isMobile, setIsMobile] = useState<boolean>()

  const TABLET_WIDTH = 760
  const handleViewWidth = () => {
    const view = window.innerWidth
    setIsMobile(checkIsMobile(view, TABLET_WIDTH))
  }

  const checkIsMobile = (widthView: number, mobileWidth: number) => {
    return widthView <= mobileWidth
  }

  useEffect(() => {
    handleViewWidth()
    window?.addEventListener('resize', handleViewWidth)
    return () => window?.removeEventListener('resize', handleViewWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isMobile }
}
