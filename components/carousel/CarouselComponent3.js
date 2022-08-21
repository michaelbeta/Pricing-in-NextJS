import SlidesCarousel from '../../hooks/SlidesCarousel-v3';
import VerifyComponent from './VerifyComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleLeft,
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const carouselComponent = (props) => {

    const [height, slides, nextRef, handlers, slideLeft, sliderClass, slideRight, slideActive, goToSlide, total] = SlidesCarousel(props);
    return (
        <div className="react-3d-carousel-v3" style={{ height }} {...handlers}>
            {slides && slides.length > 0
                && <div className="slider-container-v3" >
                    <div className="slider-content-v3">
                        {slides.map((slider, index) => (
                            <div className={slider.class} key={index} id="#carouselExampleIndicators">

                                <div className="carousel-indicators v3">{/*Crea la cantidad de indicadores suficientes*/}
                                    {slides.map((_, index) => (
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            onClick={() => goToSlide(index)}
                                            key={index}
                                            className={`${slideActive === index ? "active" : ""}`}>
                                            <span></span>
                                        </button>
                                    ))
                                    }
                                    <div className="current-number-slider">{slideActive + 1}/{total}</div>
                                </div>
                                <div className={sliderClass('left-v3')} onClick={slideLeft}>
                                    <div>
                                        <FontAwesomeIcon className="fa-2x"
                                            icon={faAngleLeft} />
                                    </div>
                                </div>
                                <div className={sliderClass('right-v3')} onClick={slideRight} ref={nextRef}>
                                    <div >
                                        <FontAwesomeIcon className="fa-2x" icon={faAngleRight} />
                                    </div>
                                </div>

                                <div className="slider-single-content-v3">
                                    {slider.element}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>}
        </div>
    );
}
VerifyComponent(carouselComponent);
export default carouselComponent