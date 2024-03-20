import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {} = usePrevNextButtons(emblaApi)

  return (
    <section className="embla w-full">


      <div className="embla__viewport " ref={emblaRef}>

        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide border border-gray-700 " key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>


      </div>

    
      <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
    </section>
  )
}

export default EmblaCarousel
