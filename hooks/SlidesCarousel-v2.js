import React, { useState, useEffect, useRef} from "react";
import { useSwipeable } from 'react-swipeable';

const SlidesCarousel = (props) => {

    const [slideTotal, setSlideTotal] = useState(0);
    const [slideCurrent, setSlideCurrent] = useState(-1);
    const [slides, setSlides] = useState([]);
    const [height, setHeight] = useState('0px');
    const intervalRef = useRef(null);
    const nextRef = useRef();
    const handlers = useSwipeable({
        onSwipedLeft: () => slideRight(),
        onSwipedRight: () => slideLeft(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    useEffect(() => {
        const locSlides = [];
        props.slides.forEach((slide) => {
            const slideobject = {
                class: 'slider-single-v2 proactivede-v2',
                element: slide,
            };
            locSlides.push(slideobject);
        });
        if (props.slides.length === 2) {
            props.slides.forEach((slide) => {
                const slideobject = {
                    class: 'slider-single-v2 proactivede-v2',
                    element: slide,
                };
                locSlides.push(slideobject);
            });
        }
        setSlides(locSlides);
        setSlideTotal(locSlides.length - 1);
        setSlideCurrent(-1);
        if (slideCurrent === -1) {
            setTimeout(() => {
                if(nextRef.current!=null)
                nextRef.current.click();
                if (props.autoplay) {
                    intervalRef.current = setTimeout(() => {
                        if(nextRef.current!=null)
                        nextRef.current.click();
                    }, props.interval);
                }
            }, 500);
        }
    }, [props.slides]);
    useEffect(() => {
        if (slideCurrent === -1) {
            setTimeout(() => {
                //slideRight();
            }, 500);
        }
    }, [slides, slideCurrent]);


    const slideRight = () => {
        let preactiveSlide;
        let proactiveSlide;
        let slideCurrentLoc = slideCurrent;
        const activeClass = 'slider-single-v2 active-v2';
        const slide = [...slides];
        if (slideTotal > 1) {
            if (slideCurrentLoc < slideTotal) {
                slideCurrentLoc++;
            } else {
                slideCurrentLoc = 0;
            }
            if (slideCurrentLoc > 0) {
                preactiveSlide = slide[slideCurrentLoc - 1];
            } else {
                preactiveSlide = slide[slideTotal];
            }
            const activeSlide = slide[slideCurrentLoc];
            if (slideCurrentLoc < slideTotal) {
                proactiveSlide = slide[slideCurrentLoc + 1];
            } else {
                proactiveSlide = slide[0];
            }

            slide.forEach((slid, index) => {
                if (slid.class.includes('preactivede-v2')) {
                    slid.class = 'slider-single-v2 proactivede-v2';
                }
                if (slid.class.includes('preactive-v2')) {
                    slid.class = 'slider-single-v2 preactivede-v2';
                }
            });

            preactiveSlide.class = 'slider-single-v2 preactive-v2';
            activeSlide.class = activeClass;
            proactiveSlide.class = 'slider-single-v2 proactive-v2';
            setSlides(slide);
            setSlideCurrent(slideCurrentLoc);

            if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                setTimeout(() => {
                    if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                        const height = document.getElementsByClassName('slider-single-v2 active-v2')[0].clientHeight;
                        setHeight(`${height}px`);
                    }
                }, 500);
            }
            props.onSlideChange(slideCurrentLoc);
            if (props.autoplay) {
                clearTimeout(intervalRef.current);
                intervalRef.current = setTimeout(() => {
                    if(nextRef.current!=null)
                    nextRef.current.click();
                }, props.interval);
            }
        } else if (slide[0] && slide[0].class !== activeClass) {
            slide[0].class = activeClass;
            setSlides(slide);
            setSlideCurrent(0);
        }
    };
    /*Muestra el slide seleccionado en el indicador */
    const goToSlide = (slideselected) => {
        let preactiveSlide;
        let proactiveSlide;
        const activeClass = 'slider-single-v2 active-v2';
        const slide = [...slides];
      
        if (slideTotal > 1) {
            if (slideselected > 0) {
                preactiveSlide = slide[slideselected - 1];//Slide anterior
            } else {
                preactiveSlide = slide[slideTotal];//Slide anterior
            }
            const activeSlide = slide[slideselected];
            if (slideselected < slideTotal) {
                proactiveSlide = slide[slideselected + 1];//Slide posterior
            } else {
                proactiveSlide = slide[0];//Slide posterior
            }

            slide.forEach((slid, index) => {
                if (slid.class.includes('preactivede-v2')) {
                    slid.class = 'slider-single-v2 proactivede-v2';
                }
                if (slid.class.includes('preactive-v2')) {
                    slid.class = 'slider-single-v2 preactivede-v2';
                }
            });

            preactiveSlide.class = 'slider-single-v2 preactive-v2';
            activeSlide.class = activeClass;
            proactiveSlide.class = 'slider-single-v2 proactive-v2';
            setSlides(slide);
            setSlideCurrent(slideselected);

            if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                setTimeout(() => {
                    if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                        const height = document.getElementsByClassName('slider-single-v2 active-v2')[0].clientHeight;
                        setHeight(`${height}px`);
                    }
                }, 500);
            }
            props.onSlideChange(slideselected);
            if (props.autoplay) {
                clearTimeout(intervalRef.current);
                intervalRef.current = setTimeout(() => {
                    if(nextRef.current!=null)
                    nextRef.current.click();
                }, props.interval);
            }
        } else if (slide[0] && slide[0].class !== activeClass) {
            slide[index-1].class = activeClass;
            setSlides(slide);
            setSlideCurrent(0);
        }
    };
    const slideLeft = () => {
        if (slideTotal > 1) {
            let preactiveSlide;
            let proactiveSlide;
            let slideCurrentLoc = slideCurrent;
            const slide = [...slides];
            if (slideCurrentLoc > 0) {
                slideCurrentLoc--;
            } else {
                slideCurrentLoc = slideTotal;
            }

            if (slideCurrentLoc < slideTotal) {
                proactiveSlide = slide[slideCurrentLoc + 1];
            } else {
                proactiveSlide = slide[0];
            }
            let activeSlide = slide[slideCurrentLoc];
            if (slideCurrentLoc > 0) {
                preactiveSlide = slide[slideCurrentLoc - 1];
            } else {
                preactiveSlide = slide[slideTotal];
            }
            slide.forEach((slid, index) => {
                if (slid.class.includes('proactivede-v2')) {
                    slid.class = 'slider-single-v2 preactivede-v2';
                }
                if (slid.class.includes('proactive-v2')) {
                    slid.class = 'slider-single-v2 proactivede-v2';
                }
            });
            preactiveSlide.class = 'slider-single-v2 preactive-v2';
            activeSlide.class = 'slider-single-v2 active-v2';
            proactiveSlide.class = 'slider-single-v2 proactive-v2';
            setSlides(slide);
            setSlideCurrent(slideCurrentLoc);
            props.onSlideChange(slideCurrentLoc);
            if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                setTimeout(() => {
                    if (document.getElementsByClassName('slider-single-v2 active-v2').length > 0) {
                        const height = document.getElementsByClassName('slider-single-v2 active-v2')[0].clientHeight;
                        setHeight(`${height}px`);
                    }
                }, 500);
            }
        }
    };
    const sliderClass = (direction) => {
        let sliderClass = `slider-${direction}`;
        if (!props.arrows) {
            sliderClass = 'slider-disabled-v2';
        } else if (props.arrows && !props.arrowBorders) {
            sliderClass = `slider-${direction}-noborders-v2`;
        }
        return sliderClass;
    };
    return [height, slides, nextRef, handlers, slideLeft, sliderClass, slideRight,slideCurrent,goToSlide];
}

export default SlidesCarousel