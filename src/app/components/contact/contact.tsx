import { ContactProps } from '@/app/graphql/types'
import { Social } from '../social'
import * as S from './style'

export const Contact = ({
  greeting,
  email,
  emailHover,
  ...props
}: ContactProps) => {
  return (
    <S.Wrapper id="contact">
      <S.Greetings>{greeting}</S.Greetings>
      <S.Email color={emailHover?.hex} as="a" href={`mailto:${email}`}>
        {email}
      </S.Email>
      <S.SocialWrapper>
        <Social {...props} />
      </S.SocialWrapper>
    </S.Wrapper>
  )
}
