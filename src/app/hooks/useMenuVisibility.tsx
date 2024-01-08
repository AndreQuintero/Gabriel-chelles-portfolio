import { useContext } from 'react'
import { MenuContext } from '../providers/MenuProvider'

export const useMenuVisibility = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuVisibility must be used within a MenuProvider')
  }
  const { isVisible, setVisibility } = context
  return { isVisible, setVisibility }
}
