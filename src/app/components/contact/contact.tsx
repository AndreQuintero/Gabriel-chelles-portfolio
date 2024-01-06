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
        <Social
          linkedin={{
            link: 'https://www.linkedin.com/in/gabrielchelles/',
            text: '/gabrielchelles'
          }}
          resume={{ url: 'https://media.graphassets.com/Du2RfITYQYiW2IpiN1nQ' }}
          resumeDownloadText="Gabriel_Chelles-Resume"
          resumeText="Download CV"
        />
      </S.SocialWrapper>
    </S.Wrapper>
  )
}
