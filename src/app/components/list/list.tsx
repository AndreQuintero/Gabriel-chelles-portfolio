import { fadeIn } from '@/app/motion'
import * as S from './style'

type ListProps = {
  items: Array<string>
  space?: 'small' | 'large'
}

export const List = ({ items, space = 'large' }: ListProps) => {
  return (
    <S.List
      variants={fadeIn(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      {items.map((item, index) => (
        <S.Item $space={space} key={`${item}-${index}`}>
          {item}
        </S.Item>
      ))}
    </S.List>
  )
}
