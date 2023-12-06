'use client'

import { Contact } from '../contact'
import { Container } from '../container'
import { Showcase } from '../showcase'
import * as S from './style'

const companies = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/dc00/c183/4fd5b27d143aba8935333787beacc72d?Expires=1702857600&Signature=bMff8lml6wRAo6ie7x33uZCzjrzESJE45g-efUKaeSnzklO4pLQ8jOkOJ05k~6-LhE9lX5jXhI~2tBN1uKqKwAwz67R~sLQJUOceOvuOgGQoEbm1QlQGoc4KYPjxoprcxtLvDy5yyg02WArMHIueOW8mBYik8WH3IZE3wUaV1QMPy99BPt9sM3QUUBElYFuRgZ23M4qWi854M0FjV~u6FXYIEXXlE9EwqOVe5vvhXlhVITIlEA~Tf8w1GQOII0ypUKQnzBB8prD1jBAPLPB~BsCIj6~meUhOyIafMfj9rrzrKWOTr~LjnoQbvCe0xTpk5SX1qJRrtdemTKWebfTvLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Gamers Club'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/0fb2/ac17/f445da24b969887d2176eaa9feaf7e3b?Expires=1702857600&Signature=JSfcGOqyCnSqt0Pi4Q-KI~hTdA5oC2Sg35Pj16P4oj9iT9sN29WmmOs28Of5BuadNYGrEQAlnKug5Rs96dOyWPjxfRD-7j5~Qiu8jrXF9lPdPVa46LfOnpykV9tmeGQVB~XcVQ1BWJfV73u5l5-zsO0laZN9BGTXdAiCmDVySNxABeG4vIcLMdt96UbgGL170v5b0iJIZ6rUQE0rDZr~CtcIK24cFbeb-mN1Z3bTQOAjv1pXSO-2dmy5b92CzXsm06bYxxEds0GJDMVWdlko9~yta70RuA7D1j6Jo4hRp-zLxDWmSFU96XSq0EBwl82PIzX785~dP79LHonWHASwPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Twitch'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/ddd3/9d51/34d7ca17d2e33003e02e31aa90725c2e?Expires=1702857600&Signature=kcUX0E2AhhjIk-zjctsjX6~tMVIc-c9w0PKEW2sxRL4MU59wZOqPb25upqtQXBayk2f5mqqtRrmobYXrBw8GrtlYDywK2JXTyQpdm~fB0~rohf3~x0Y-cUmvVby6FG0mjaDdQMNXlPfbT36g7zpfMOVQoC7dEYlI9e1PvnAla07Ick2D03AC4VCdq12NbwYKF7yIK00VozDXVt2lPTfy5a8wl9-z22TE8dh1XLqei~vmjgZ4oCj2OunQXLtNExX60OURP7qf~-s9JkL~WJE2O~n~1IzwPgiH2VibK0Zlgsqy7JJo9RZRui4wXlioj9XKn3wCTVmspLjgn1XvyOZH8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Monster Energy'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/8ac7/7abd/b578cd9714fa748f21307c356b9f7db2?Expires=1702857600&Signature=nr4vIh2ApXWa9ajubULuavLOsWBHScQl19RueVSzE9SI3FtBIW3fQwKO~5BVRlrsV92WlyeT-HQUXfA0-hEge1a9HFgNKRo2MEJZQdjxpXsp45KiMvcNbcc9YFbXiqphCD55Hg4uJWjbKp-JVG2HQJICZBWeCgPwneXdVTMv9XhTIAai~tbv0X6NY7g8zlBv5JvOkFYuNa2iOHP3pYExiGTNDl0GfWt5FMa3E9ZcT0j3M~7KyZz7iiKmKMDEZFwhFCjIlQ~G9imJLfNWdbyHMRpzJj2QMomGYUqdKEpkt9Y2DCZIkXCdFVZYmrORBBoxpcszkQ7nzC~J33teawwjoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Itau'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/01a3/78be/ad9da0d7ea8b13a9a3324d30ea6bdebc?Expires=1702857600&Signature=JKrZRHTnct5c6ncBxqiJBD4iXAPvbgj~8il~OGQ5thzVvdOcfgOzfoC1q0hbTg4VctYET8AlWhz-tMykxHlJKRHl1iOd73mKQvxJbPXcDvOewoGEV2bv34QFw4hXusHkmJiCBlCmsc4wyC4F0TDNmgIdsEXnTD4wJrYawKksmrt-ShMdbeB~GagjvV08FSZqiniy70IhuC-mM5hQatzqiWwOT2aVY4ucBZumxg7iSwb7U9Br4G7J1emhDmon5pmdecT1sfqbsC5o0tqWaS3H8xt~UryzEvZjJOz6WzI-hkwDU17Ie7CoDYwYVd7RMMXCtTLXOQHoMnWDS2jI0K9nZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Super Digital'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/e836/78b6/21f9c97f033ca3649c05ba621c4b4316?Expires=1702857600&Signature=FCOOgowlydYx5VhipSONyOkX6ysqiLB77Ql~VjuyEFDKalo5tKEM5a9XMGHjRnWeXh8vVa5XnKbBNHUuQwMFMglVSA3YIpoJOf3LMTe1E0DGem3c8fdcvDXvYLqtk94~T4rrS9~ZRhJomEEEzY4JIutBAm9yfi410J5Jp-f9ucu9Pnc6jA1trhbo01GfAV~F39OQdYWzfANgS07Hqby6HxFTFwKfQ3x8Mst8za0AZZT79z9H7D0phBcF4s0dI-4W7a3T5hG2GTF5q2xRoLPIq8yrbe8t4OJWak68Dvit9jiVgg9El~M45sLUf5U2YS1PvqtLkEUQPXAk0EbKCm5Rng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Iguatemi'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/f681/5509/38c3f8cdca2aa90784307d4ce3806705?Expires=1702857600&Signature=h2X9J8o2XopYjXOUSIY97nw4cfSgCdYQPhdjSR3d5L9JEBHsVkB87jO0kfusaQ0vDmhXAD8Gfu14qKzYGNZpiz3I~iH3-VPGJVH33hpXHcpPLQMm~~dPpokEbg-4BY2nbsOeg0-FsbH49t-yyZXYTgqQQc4EBs-M6yHwiTlHwMju-GhHxD8iuhrYm3yjjyyeYNKJlDqCBUueKU-Wc4Kht28c6j3v0htUzWE9q6aEFeJE701iWCZ8dILZ0ICcyEDcxmTATchy6X2zebVva7Bm0KMwy9qqjqgtkTg7aRWNPl2a4a6MdI04DkcZlbrlW67QU1tspuBgJgVxxVv0yUxXXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'RDE'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/6c12/98bb/5e2db6544806128a71b3dfcdbb8ac2a9?Expires=1702857600&Signature=iFf8FwUevsE4TJbnGM7I4okeKyMGcDW54J-f5yaYSHFw4PhHpZjDDyC8FT7FEwHN~VcO6Jciv4jwsNvT8BBAEfKKHvJ5yWi~VVTR1vr5byPWlQtPELlhKvo3kY8wJA7yf41PpiKwakeey0XUhkshnW4D26NEMeQPjzRdXBzl9YK51sNFiYqw737cgq97AuVWm7p3ISPsof-6qnCJFs9t91CO6a~TVK5WZ4b8VbBo9yvHwEly7J7xX4aKknrYFvIJkJiiNgI45C1WJODlSZFzZa-s2YFGW6a6FD2KGkP68NXQy91ZW8ZMJ-UKO3LgVY2xLvobp5h3E4dX5mYqj6IT7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'BV'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/9b31/cfdd/fad924c0364e56007ef77e5fa1254b30?Expires=1702857600&Signature=FST9t9TXoo50tbhQ89tWBpZqPVkC4fZ1O2mqYrFICyOmZdZm-bxGoNNFzgWoyM0Ptwcr7PQLj2hpDRqT5vWAvL0yRwr~6QTYjjtZSU7FXH1THiYnZ71f1saujJrjGX-bBk-4wogqiZrqGXg2AZD2HLZlLfBFKqb89qqMZYksh6R9L63fQQJyRpNs4ku151dhLhyMkgnvmbNmbAHs6To~qlrepa-th0gOsEU6iIt7UqcsbdlfQORc2CmwdppyUmQohKwTLPZeDMGKhtUwLpb4sq~Ff1aopdngKYtCjFsqV6InTP2UTFH6dAZqs282E4eLudhdBSmKM6tFMvc~pBrtWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Setta'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/5aeb/9a85/59706c35e73cf3960d9c193ad65689ad?Expires=1702857600&Signature=pKHKfvchcm5BtbpAinSjQs8SXfCmWAoqlY9zF68v9F-faseKwzIq6WRBmYBaNwCkJlF9inWKZ0OgWB3GY6Efzk82nVlZ1PnnVMvx102w-4VKg5sjK4HDya3MxOnn3Y0bw448L4zj6jvkywg7krZApctD0hkuDIiVFP7JkFPLu7zSQA3jqB649iHHYbbshE0t6ZgNazH6ewux9Xr~SjVrwrSUPbivtgv89bI8EO6ErqYUUosWo-VcbY9Gfgg-F3sZOOqSh8kg64HzNIsANZuj18rtkS3O2up81fH403P-xXAbQx8AdnflaY6FLYEaHGYIDoW1qV1C2vGLs-BL83A21g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Laqus'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/4c8f/4a82/da27a99eb9ab47a6b0e7df72b2907f5e?Expires=1702857600&Signature=IS8s52PsPNjRs20CiDXRSjH~j23Bvq5dX6OLz4P5ndgqHIWxNg4u~pjlHvWSKV2vzblFreNFOMfFuiCL3hCDOmIiouq-wfcN3L8AQgHtu-V1G9qO1BW2QKskhj1zK0b2vskHx1wnk1JWLpvd6zZV~Fj9VNvml-3sXcJkFxghTjRVEdV4LtoRyUJpW2H01NueB2xx77CkVkA8qH-hD1LA~Jd~Fik8qGI20QgZG6wh3c096Qm1mHnWgKT2IUE4AavZyU8t7rw8~o45OYrEH-BpaXSsSLP4Kmow~yEdaA7lwBVPF-buOphTyYLbO9lkwYvD6dujt0sOfsPZYfPUN~QC-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'TRY'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/e2c4/c9f4/577900315d3fb96ff9e36bf56c18a4ee?Expires=1702857600&Signature=Sk~UJuka7XzT~nmH1JJzv5gmrA369K2YINiEXF8gpO~cOexG-4LTSvAvhXm1kNrSoKnKNmJ67wdOBcvA~kp4EETrrZUmKaXtaTIjKsTniYUb6sYc-vd8WuVEAw2A2PSRhoSDKTxQepQloA1nSr4fnx-s7WJxkVEDD3JgmKTB276oE3X~n2HjXbNxUTebyj5ADvZ-N89fcp9SnIGl8cQZS6WHKEgDo5FvPhCOl2BA8B3~9ChxyYJc~yQiL-tploD0rBu77rLC0SfeauUj7LRfUVPwDgwpCX5AyWIax6VweDtLSCJ4RulrYui~B5iDVDmEMUdENbaiqVr9r9TlHusydg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    companyName: 'Helpay'
  }
]

export const Footer = () => {
  return (
    <S.Footer>
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
    </S.Footer>
  )
}
