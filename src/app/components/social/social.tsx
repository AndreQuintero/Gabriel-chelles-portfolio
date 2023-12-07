import { Button } from '../button'
import * as S from './style'

export const Social = () => {
  return (
    <S.Wrapper>
      <Button
        colorScheme="primary"
        icon="linkedin"
        as="a"
        href="https://www.linkedin.com/in/gabrielchelles/"
        target="_blank">
        /gabrielChelles
      </Button>
      <Button colorScheme="primary" icon="download">
        Download CV
      </Button>
    </S.Wrapper>
  )
}
