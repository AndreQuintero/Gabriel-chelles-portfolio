import Slider from 'react-slick'

import * as S from './style'
import { CompanyCard } from '../company-card'
import { ShowcaseProps } from '../showcase'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const ShowCaseSlider = ({ companies }: ShowcaseProps) => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,

    speed: 1000,
    slidesToShow: 1.2,
    slidesPerRow: 1,
    initialSlide: 0
  }
  return (
    <S.ShowcaseSlider>
      <Slider {...settings}>
        {companies.map((company) => (
          <CompanyCard
            key={company?.description}
            description={company.description}
            imagem={company.imagem}
          />
        ))}
      </Slider>
    </S.ShowcaseSlider>
  )
}
