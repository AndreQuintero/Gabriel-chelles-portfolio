import * as S from './style'

type ListProps = {
  items: Array<string>
  space?: 'small' | 'large'
}

export const List = ({ items, space = 'large' }: ListProps) => {
  return (
    <S.List>
      {items.map((item, index) => (
        <S.Item $space={space} key={`${item}-${index}`}>
          {item}
        </S.Item>
      ))}
    </S.List>
  )
}
