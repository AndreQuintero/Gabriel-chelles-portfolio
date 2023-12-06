import { Button } from '../button'
import * as S from './style'

export const Social = () => {
  return (
    <S.Wrapper>
      <Button colorScheme="primary" icon="linkedin">
        /gabrielChelles
      </Button>
      <Button colorScheme="primary" icon="download">
        Download CV
      </Button>
    </S.Wrapper>
  )
}
