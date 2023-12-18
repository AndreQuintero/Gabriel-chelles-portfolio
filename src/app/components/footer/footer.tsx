'use client'

import { ChangeTheme } from '../change-theme'
import { Contact } from '../contact'
import { Container } from '../container'
import { Showcase } from '../showcase'
import * as S from './style'

const companies = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/0767/daba/d689e8ce7d6d9ef151684f746eab634d?Expires=1704067200&Signature=NN81Q8Y4YvjPD6YgjKmu1f4jqGLpo3CrVf7QAyEHnxxOOCFtey1CvVewXnT5mHu09xBXpwoYHY0SeEP7tjHxgyuTUVz0gnzLI9-PE~BVMX9GkkFIMF-ZBdwkUyjgiYuGuDXuvsJEYisoolmKV5nGKVNlGa-thL5SotIauLjWAUyL1FaFANFDvaTRKea4sz0QqOMDo3FEElBfAVOb~5sc28hSOsDx0zI35kP6TrjpNGqC2KHKrdZAfwq665HOGvL4uvxzNpFNZHE5NQo3BFTLW0E~ml~9fkhQVc1cZu8jo9CBeYDY4JqB09IPDvimgzYbM46mMuJ9OX6tk74auPQf0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Gamers Club'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/0fb2/ac17/f445da24b969887d2176eaa9feaf7e3b?Expires=1704067200&Signature=YkO7BeItr3cSMM3r1KBbj4tkfDWCmiXlOtta8yOt~nedJEUTOibd-PPT~8bMG01Bnr6bWMrPOssTwXqnmtlV9WtQobGi7InfArAo5RX4-6WfXrrhr5xs88pOb9kz48YuTZxC7SCp8wDXnspXhY8sc1gddAwbqPdFBhs~bFIjLrbY~tZW4bNSEzP~0TB5ex2attPzBrrf397IYwslwKjajxHhxElpwJcsMJE~Z0-ZDsd5ybyPIRfHS1e5AImzNqy570AbvyRKwKKzD~Eeuxyt~QuAp2~6dLX91iQL1aeynaSUuNhO3lM9T8d~U2RFrYneM3drYL3xgGeRPeznCPyloQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Twitch'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/ddd3/9d51/34d7ca17d2e33003e02e31aa90725c2e?Expires=1704067200&Signature=OUtLfTgoxV19I1fvKisYFFz1z6dzdxIMKXxfAyW9t-hEsdryRXrrKyB5lwzcdgoLyYqKTZ6nElM1hmhaqCd7Kr0GOjMhhDwxcu2m6Sppz2s-iU1BUfEXxEA1aksWuqx6UYNvLS2iOcW3bY9ep-e66RuM8Ct6qUZBIsYTbUsYS5HomAdZCw9yXpF2jJJtw4-UGYxB7YzQIYpI0s0v33LuW1Fcp6TsMmzGzm0zl7Z-hdy28eUtOZqk6oe9MwUTxQkkLhWZfoUlOpW09XLfE8rdk8r1W6ax2VNNfo5Kk9v-L0Ppq9i~zbof1numhzS18fKHCbsGTuXNr6-IYjmjhS1IFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Monster Energy'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/8ac7/7abd/b578cd9714fa748f21307c356b9f7db2?Expires=1704067200&Signature=pkre1pU-WtzAp3KYCvkBXp0MmYNrX~mLf9P3P1IOTu97KuGfLafdGyhoKlwe9N0k4eroBhBL~uHI3kac1GfMpRwJbGLtk0hSfkY4~~dVSvUryONHUltVXJdH8rJsBCT~2bB6PePSJXaRAJlxC9qcsO5~qhmW~9bwfCE720aBseSATT-oBoqwO217CkMnKjDJNqRwrCHeYUsDdRyi-nMPL0b5meoyiYuoC03abLjtN07r409DNM0Hszw~Duuc2I7lrQ91cOTNzWA1XjFPl5rWkr64~czhR97EWjS0bkjySDhvvf0wAjtjKmNvgTdgL2AdvuFMh0PYFXCtD3odr59oLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Itau'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/6092/3a26/4af4702c598c0c35472dc57497fd7343?Expires=1704067200&Signature=Anafz66sWwAQZzu7pEZMUxtWY56PMZIYlJNTjz2riJ5HBFff5mdoGRbBeRUC8l~I3CvSuW1DMG3yO5yI4cwiI2L-yeN6a4mMYUwfnnhM0Y6PAgJrTV~azwumFtkjaZCNfrvOj3fx5dCD86O7c6JJuP5PemX3R3NaVc3rLANS1ObDGmbEtcnnj5dfMeZDpQOWi9lBf99YTyIBlYQV-p5v-C9n-gROyAil481eAoSRm243KqAGCtNgY2DxsxJUrYOO8QlPwb4wdADvenBhptpTWHwmj-3s~BOBVyflKkQwmB1S7xSa3tt2xhbw401LGmOGUdMsTY2rCmdKJ8CYIQQScw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Super Digital'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/bc8b/4151/b1afa048fbb2f84ed7c28d3c9ab32317?Expires=1704067200&Signature=ejAJcXUORb8D8lm3mNNtUzMxEtU0JKPnUFasf-s-tu55GWCmYoJXr6a364jVtBWUROzCrhAq-afPrayrEbWOhALOfLN45LKSWafo6aaA5ezznxnVXxpX8q9FznwlKErji4erDdIg73ttnACRFg6kQts4Enup3GSv0u4wif3J010RsSq1r2Jq3X2F8HUD4AcW4Zqcl~zMpzLk6C-GNbAYWKe2YwYq1FPObvb4Dt4ubDBaJjVuiEMiGTEp~nZiE36DVTu-kwb~UXCS8AWYDBNa9RbmVUe842Zl22MjLjhMIKXwnz53iANrjODMBAG-Ppg5V4T9Qd9Zm1jiNhcA9UOrFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Iguatemi'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/c6d7/fd1b/701f86eb8f2ca42bf95e823019952c70?Expires=1704067200&Signature=REqOtd92N0h55O2H8iiW69W~28xm10FfCKfkoGYSb563YFVvv5Oo7INL~pgSn1JbuHhPumAo4RaIOv1mTPg0BF78G743MmdVTqhTG3KWLgNImOfcTRRzyVm0SBhC0DPj6p9k1P8QcOwvEvYkBqhwTdSJ3m36f8~PrELnvIINLiqXfZje3E2cdHiQUrpt8oYrZSpYoVe5lIWa2QSTJCywLrM5BV3OggTj2sbE6~KSmh9NbERif1KRa4eblmUZ50YWkbjCsQcJfzN4iai3wDhr7sYzcPz4bX5AoAhp1WOmH2Cvdzci-WA1CYnSwBEJRK2TctP6B3tSg6lgsbcfiL02CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'RDE'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/0ace/43b5/d74eab1cecee2eef66cabaa364328e5e?Expires=1704067200&Signature=dcAIu5tMpZzpAjih3I6P2tonWWHdxJJQXDcq5fDhIynTdOEzfHqtKCYT81~6SOtuNuadWRYGWvvP8qEayJt1iorNnmT07V8jA5~rIRYuaeHXk1X4gSpwaDKmvEbFlg~aOVymSXMPgQY9-U7iFyjngqgIxZ6jVEwjuO1oAUX~tgPzK0rmLwzCJQ3kLF1dKhAvJVz6jXxH0RZo~hiEFDphMC3h9Q7ncBkr7duf0VhvmKDM3CPzrq-cgQpVXKPsy8-PLMk671QknWMh53xwoyJ3Ia3hskQhNyRfD~o0cCdjyEfFaavAZo4e9Cx0zYX1tIYm2o0NVqjnDEtnu1ZichGxuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'BV'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/4533/8759/b804d906159993316167508eb739efb2?Expires=1704067200&Signature=ed6ZiVGMf-xrvWEbHjqW77UgFY2ptsnPoizHivK3j69uP6h1K8qMBPJ1XVC5ZoDvkcsl4oRhfoUkeZ3OjeC4MMaEeX6wjDt1ZnsuUL6wk4RMYDKAYQ7R38eEjY0xRNazcSGtO0GPEMUTdNg21-DHKMhdFwkJmqUMSboKocgxu5p4R2I7dfYbI9K~Ecahrz~JoXqbKvz1P2WuhGtTP2TFOrBQCsJj66YmmvytImuyW2poa3Ip97ja8dbV-yuDHDrC2QFqk5MR8JRq~6I7YW9gduZRRsFZlZEJo2IxCJdpEdKEQS1xbzlOmTMnUVE5LM9PofARAOshr-tG0HGyVPtjJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Setta'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/402e/d6b0/e56bd3a69be9eef49bb169202399bd00?Expires=1704067200&Signature=frNQz2jy3jxlSWC16z1gu8gouO7nP8YUmA6TpkyEPa6iqJEE6vLVOtPNNxZ3XQYphQ~jQY8SfVHd5X-rgTttVFQ3mzh1JqFxpE8OED81ADYD-Pd1g0EGmsijEmSW9Oj2FpM0eRLu-h6LHKRoEbXSoAbMtWgfBP~DrjaGSllgjvklm6GtzOeWdXo7RXdM76JTfCT5h6wCJPvUBtv~od9Yr4JhnY8McxIwanxQNnw5HVlIdnH1U3FPu8mq~Gr2j2t8DJVEb7NfOm-ZeT06eMktrhGbv4GaFFqNzsG0ZHmJ5Deo~QdfwUdLk0GOy8yjfbeUFRNJPLrnivkItC8nVJfuVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Laqus'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/68a2/9d98/c01b5d53331f1f054ee9fb9b9735b695?Expires=1704067200&Signature=lYDrLzQ6nNiCIx4kShoWKvGHPLOQTzZpsV0rHZZp4TW~w7tXWShb6kToQ75C-EEiSAysdv6AmN5qU3pMBE7eQhuTsHDB7JF~Sj34xgMLLn0TcPEibCPl5sJaD~UV1bLgAXZ5q091TMUEKuWgUZSil~SpVZj1ub6OlCcArG9M3Vxlu8P1A0o9Ei5OFKnyqWGFEipn3TlfBcmRZ2KgzzWXHDaFqsrwKtobAW~mvhR6imFD3EyOTKFBG~u53G29Q4MOfCav3EUmWQHI02vR6Cr9Ma-ynBCPWaOvUjVz0PYXRnGi0qyteJ517XK6C2ClqRuUnPKO9E7LLpoEwEECLipORQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'TRY'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/bc38/1528/117054310d8303341fc8c4c00746b607?Expires=1704067200&Signature=YV9Bv0rBhv~CEf25SYXDJOlcuZpyDiPDEweoHi06jI6LfUOZTRowtpo5vKOoEvE0eYp2frUSZ2~VQK-NDTUWKcNstBXtycURHzCP3ZqnqftWYKOegWwFkCi9JV2OChU-Yq~5Sp4VvhY3oONfBUUKm8fVKb4wlm1YADNkY2CxdNxSwenSRCiVvQr9R8FFzimRO1lU4WNXENry9JGeVhkEpYRg3HnFQEhbtqiT-p9JT2CTctBwkcf85uOXZj-KwSuQ6mb5XemlnzrdPgPJFL~YDAKSjPaqG-czGzd-~SeflCT6ldKDLU59FIMnyDsYlNJ2TC8ljmChGw1WCnrx8fhAVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Helpay'
  }
]

export const Footer = () => {
  return (
    <S.Footer>
      <ChangeTheme>
        <Container>
          <S.Title>
            Trabalho com design para produtos digitais desde 2015 e sou um
            defensor de experiências simples, intuitivas e agradáveis!
          </S.Title>

          <S.Showcase>
            Algumas empresas que tive a oportunidade e o prazer de colaborar
          </S.Showcase>
        </Container>
        <Showcase companies={companies} />
        <Container>
          <S.ContactWrapper>
            <Contact />
          </S.ContactWrapper>
        </Container>
      </ChangeTheme>
    </S.Footer>
  )
}
