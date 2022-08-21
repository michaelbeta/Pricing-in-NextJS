import React from 'react'
import Carouseldesign from "../components/carousel/CarouselComponent1"
import CarouseldesignV2 from "../components/carousel/CarouselComponent2"
import CarouseldesignV3 from "../components/carousel/CarouselComponent3"
import ImagenesCarousel1 from "../components/carousel/Galeria_1"
import ImagenesCarousel2 from "../components/carousel/Galeria_2"
import ImagenesCarousel3 from "../components/carousel/Galeria_3"


export default function Home() {
  const [slides] = ImagenesCarousel1();
  const [slides2] = ImagenesCarousel2();
  const [slides3] = ImagenesCarousel3();
  return (
    <div>
      <div className='container'>
        <h1 className="text-center">Carousel</h1>
      </div>
      <Carouseldesign slides={slides} autoplay={true} interval={5000} />
      <CarouseldesignV2 slides={slides2} autoplay={true} interval={5000} />
      <CarouseldesignV3 slides={slides3} autoplay={true} interval={5000} />
    </div>

  )
}
