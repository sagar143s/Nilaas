import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/img/portfolio/brands/bossini/1.jpg'
import Image2 from '../../assets/img/portfolio/brands/bossini/2.jpg'
import Image3 from '../../assets/img/portfolio/brands/bossini/3.jpg'
// import Image4 from '../../assets/img/portfolio/brands/bossini/4.jpg'
import Image5 from '../../assets/img/portfolio/brands/bossini/5.jpg'
import Image6 from '../../assets/img/portfolio/brands/bossini/6.jpg'
// import Image7 from '../../assets/img/portfolio/brands/bossini/7.jpg'
import './common.css'

const AnotherSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        
        }
      },
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='sliderimage'><img src={Image1} alt="Another Image 1" /></div>
        <div className='sliderimage'><img src={Image2}alt="Another Image 2" /></div>
        <div className='sliderimage'><img src={Image3} alt="Another Image 1" /></div>
        <div className='sliderimage'><img src={Image6} alt="Another Image 2" /></div>
        <div className='sliderimage'><img src={Image5} alt="Another Image 1" /></div>
        {/* <div className='sliderimage'><img src={Image6}alt="Another Image 2" /></div>
        <div className='sliderimage'><img src={Image7} alt="Another Image 1" /></div> */}

      </Slider>
    </div>
  );
}

export default AnotherSlider;
