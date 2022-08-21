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
        <h1 className="text-center">Carruseles</h1>
      </div>
      <h2 style={{
       fontSize: "2vw",
       fontWeight: "800",
       textAlign: "center"
        }}>Carrusel 3D Rectangular</h2>
      <Carouseldesign slides={slides} autoplay={true} interval={5000} />
      <h3 style={{
       fontSize: "2vw",
       fontWeight: "800",
       textAlign: "center"
        }}>
          Carrusel 3D tipo tarjetas</h3>
      <CarouseldesignV2 slides={slides2} autoplay={true} interval={5000} />
      <h3 style={{
       fontSize: "2vw",
       fontWeight: "800",
       textAlign: "center"
        }}>
          Carrusel 3D Circular</h3>
      <CarouseldesignV3 slides={slides3} autoplay={true} interval={5000} />
      <footer style={{
       fontSize: "2cw",
       color: "var(--clr-muted-max)",
       fontWeight: "800",
       textAlign: "center"
        }}>
        <a className="autor" style={{fontSize: "2cw"}}>Diseñado por Michael Betancourt</a>
      </footer>
    </div>

  )
}
