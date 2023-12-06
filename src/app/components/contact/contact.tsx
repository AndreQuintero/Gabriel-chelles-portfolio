import { Social } from '../social'
import * as S from './style'

export const Contact = () => {
  return (
    <S.Wrapper>
      <S.Greetings>Sinta-se a vontade para dizer um “Olá”</S.Greetings>
      <S.Email as="a" href="mailto:contato@gabrielchelles.com">
        contato@gabrielchelles.com
      </S.Email>
      <S.SocialWrapper>
        <Social />
      </S.SocialWrapper>
    </S.Wrapper>
  )
}
