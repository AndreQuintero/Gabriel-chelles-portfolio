import * as S from './style'
type MarkdownProps = {
  item?: string
}
export const Markdown = ({ item }: MarkdownProps) => {
  return <S.Wrapper>{item}</S.Wrapper>
}
