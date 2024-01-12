import { TagsProps } from '@/app/templates/about/tags'
import * as S from './style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Tag } from '../tag'

export const TagsSlider = ({ tags }: TagsProps) => {
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
    slidesPerRow: 1,
    initialSlide: 0
  }
  return (
    <S.Wrapper>
      <Slider {...settings}>
        {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </Slider>
    </S.Wrapper>
  )
}
