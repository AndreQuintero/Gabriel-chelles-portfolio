import Slider from 'react-slick'

import * as S from './style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CompanyCard, CompanyCardProps } from '../company-card'
import { ShowcaseProps } from '../showcase'

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
            key={company.companyName}
            url={company.url}
            companyName={company.companyName}
          />
        ))}
      </Slider>
    </S.ShowcaseSlider>
  )
}
