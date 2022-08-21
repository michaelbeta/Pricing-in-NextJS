import React from 'react'
import PropTypes from 'prop-types';

const VerifyComponent= (CarouselComponent) =>{

  CarouselComponent.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.element),
    autoplay: PropTypes.bool,
    interval: PropTypes.number,
    arrows: PropTypes.bool,
    arrowBorders: PropTypes.bool,
    onSlideChange:PropTypes.func
  };
  CarouselComponent.defaultProps = {
    autoplay: true,
    interval: 3000,
    arrows: true,
    arrowBorders: true,
    onSlideChange:function(){
  
    }
  };
}

export default VerifyComponent