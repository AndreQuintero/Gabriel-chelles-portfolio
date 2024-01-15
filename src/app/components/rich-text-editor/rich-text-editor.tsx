import { RichTextEditorData } from '@/app/graphql/types'
import * as S from './style'

type RichTextEditorProps = {
  item: string | RichTextEditorData
}

const isRichTextEditorData = (
  item: string | RichTextEditorData
): item is RichTextEditorData => {
  return typeof item === 'object' && item !== null && 'html' in item
}

export const RichTextEditor = ({ item }: RichTextEditorProps) => {
  const isRichTextEditor = isRichTextEditorData(item)
  return (
    <S.Wrapper
      dangerouslySetInnerHTML={{
        __html: `${isRichTextEditor ? item.html : item}`
      }}
    />
  )
}
