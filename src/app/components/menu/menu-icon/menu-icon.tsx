import * as S from './style'

type MenuIconProps = {
  color: string
}
export const MenuIconOpened = ({ color }: MenuIconProps) => {
  return (
    <S.MenuIconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 9H3V7H29V9ZM29 17H3V15H29V17ZM3 25H29V23H3V25Z"
          fill={color}
        />
      </svg>
    </S.MenuIconWrapper>
  )
}

export const MenuItemClosed = ({ color }: MenuIconProps) => {
  return (
    <S.MenuIconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 14.5859L25.2928 5.29297L26.7071 6.70718L17.4142 16.0001L26.7071 25.293L25.2928 26.7072L16 17.4143L6.70706 26.7072L5.29285 25.293L14.5857 16.0001L5.29285 6.70718L6.70706 5.29297L16 14.5859Z"
          fill={color}
        />
      </svg>
    </S.MenuIconWrapper>
  )
}
