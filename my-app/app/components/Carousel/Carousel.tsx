import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


export default function Carousel() {



    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())




    return (
        <div>
            <div className="w-full xl:w-1200p mx-auto mt-80 embla-container1">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>

            
        </div>

    )
}
