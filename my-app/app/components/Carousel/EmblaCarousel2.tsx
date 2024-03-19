'use client'
import Image from "next/image";
import img1 from '../../../public/images/me3.png'
import img2 from '../../../public/images/m2.png'
import img3 from '../../../public/images/me1.png'
import img4 from '../../../public/images/m4.jpg'
import img5 from '../../../public/images/m5.jpg'

const images = [ img1,img2,img3,img4,img5]

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'


type PropType = {
  slides:number[]
  options?: EmblaOptionsType
}

const EmblaCarousel2: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false, stopOnInteraction: false })
  ])

  useEffect(() => {
    const toggleAutoplay = () => {
      const autoScroll:any = emblaApi?.plugins()?.autoScroll
      autoScroll?.play()
    }

    toggleAutoplay()
  }, [emblaApi])

  return (
    <div className="embla2">
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          {slides.map((index:number) => (
            <div className="embla__slide2" key={index}>
              <div className="embla__slide__number2">
                <Image src={img1.src} alt="img" width={50} height={50}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel2
