import { useState } from 'react'
import * as S from './styles'
import Slider, { SliderSettings } from '../Slider'

import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'

type GalleyImagesProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleyImagesProps[]
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  prevArrow: <ArrowLeft aria-label="next image" />,
  nextArrow: <ArrowRight aria-label="previous image" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ))}
      </Slider>
      <S.Modal
        isOpen={isOpen}
        aria-label="modal"
        aria-hidden={!isOpen}
      ></S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
