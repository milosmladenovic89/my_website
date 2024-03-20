
import EmblaCarousel2 from "./components/Carousel/EmblaCarousel2";
import Footer from "./components/Footer";
import MyInfo from "./components/MyInfo/MyInfo";
import { MyLogo } from "./components/MyInfo/MyLogo";
import Pricing from "./components/MyInfo/Pricing";
import WhatiDo from "./components/MyInfo/WhatiDo";
import Resume from "./components/Resume/Resume";





import { EmblaOptionsType } from 'embla-carousel'




const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())








export default async function Home() {



  return (
    <main className="main-bg">

      <div className="p-5  sm:p-12">
        <MyLogo />
        <MyInfo />
        <WhatiDo />
        <Resume />
      </div>

      <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />

      <div className="p-5  sm:p-12 overflow-hidden">
        <Pricing/>
        <Footer/>
      </div>



    </main>
  );
}
