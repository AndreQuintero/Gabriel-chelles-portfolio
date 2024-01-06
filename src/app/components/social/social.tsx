import { ContactProps, LinkData } from '@/app/graphql/types'
import { Button } from '../button'
import * as S from './style'

export const Social = ({
  resumeText,
  resumeDownloadText,
  resume,
  linkedin
}: ContactProps) => {
  return (
    <S.Wrapper>
      <Button
        colorScheme="primary"
        icon="linkedin"
        as="a"
        href={linkedin.link}
        target="_blank"
        rel="noopener noreferrer">
        {linkedin.text}
      </Button>
      {resume && (
        <Button
          as="a"
          href={`/api/pdf?download=${resume.url}`}
          download={`${resumeDownloadText}.pdf`}
          colorScheme="primary"
          icon="download">
          {resumeText}
        </Button>
      )}
    </S.Wrapper>
  )
}
