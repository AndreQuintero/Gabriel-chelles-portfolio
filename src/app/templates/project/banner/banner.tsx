'use client'
import * as S from './style'

const url =
  'https://s3-alpha-sig.figma.com/img/b5b0/5c6f/2a8a06a61daff9ffdff47096cfd7068c?Expires=1704067200&Signature=RepvMADzWwMedkpnQlr1h-50pKxQxluZzv2oAXymrtepfT-MVdpAEdse3kTGt90wtVM0RwixkAPwd1CZaeOVaK~xnzfb7z7~HrcLhfnZQuxhGnsQ9nyKeodBQGo~-YzoOOsNi0gU2aJCVcosXF-DHuLDVMs5MUkdnsnX~KEIHV05RgsG95ahSnvYLsUdRBfZ~AgSBN94nCMm4y66D7nh0VrS-q94La4Xx5O7hRpvs9oZWQsXVKHuU9Et3BNA~kcQcT6Uzu7ctZtAAn8zKxZ1ikUIdEG5Vgrj1FfQrH98abMBA5Jrk83VZavQ6IwoHqHjP65DGP6Z0ciHVcQLMb8CWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
export const Banner = () => {
  return <S.Banner $url={url} />
}
