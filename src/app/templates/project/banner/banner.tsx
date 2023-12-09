'use client'
import * as S from './style'

const url =
  'https://s3-alpha-sig.figma.com/img/b5b0/5c6f/2a8a06a61daff9ffdff47096cfd7068c?Expires=1702857600&Signature=Rv-a3IEDcMge~EBU88ASNybj5wsa5KMlBIUxiDpMmKGUWWPb3uIP450bGVF9B19nNxgoLra95aAgpiH0WhiKHdDQyaWmlEElAWEOcv7SFLvbmEzSbZvvDbxUkKEPN~wv7eQExWmIExHBkBfYAXzLIai4JbBzk49tSFJDYuDHOKofaJBCNK4REGpVgOdT-HWLejT3BMO88xhVAyVT8WPhCCnc7uIt2e~Ig6xRhmcHj4y506eglfdpnEezAdnklyYjjm~gAYUsc3~fHKnr6lqhF-iVNuSl-KCilELS83x8qLmRs~fTQerhOAjgFFu90IzLXZVl-x7oc06~IjhAA857tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
export const Banner = () => {
  return <S.Banner $url={url} />
}
