import { ContactProps } from '@/app/graphql/types'
import { Social } from '../social'
import * as S from './style'

export const Contact = ({ greeting, email, ...props }: ContactProps) => {
  return (
    <S.Wrapper>
      <S.Greetings>{greeting}</S.Greetings>
      <S.Email as="a" href={`mailto:${email}`}>
        {email}
      </S.Email>
      <S.SocialWrapper>
        <Social {...props} />
      </S.SocialWrapper>
    </S.Wrapper>
  )
}
