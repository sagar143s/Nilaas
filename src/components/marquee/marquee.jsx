import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/img/portfolio/marque/1.png'
import Image2 from '../../assets/img/portfolio/marque/2.png'
import Image3 from '../../assets/img/portfolio/marque/3.png'
import Image4 from '../../assets/img/portfolio/marque/4.png'
import Image5 from '../../assets/img/portfolio/marque/5.png'
import Image6 from '../../assets/img/portfolio/marque/6.png'
import Image7 from '../../assets/img/portfolio/marque/shopcin.png'
import './marque.css'

const AnotherSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div style={{margin:" 0 0 50px 0"}}>
      <Slider {...settings}>
        <div className='sliderimage002'><img src={Image1} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image2}alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image3} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image4} alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image5} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image6}alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image7} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image1} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image2}alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image3} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image4} alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image5} alt="Another Image 1" /></div>
        <div className='sliderimage002'><img src={Image6}alt="Another Image 2" /></div>
        <div className='sliderimage002'><img src={Image7} alt="Another Image 1" /></div>
        

      </Slider>
    </div>
  );
}

export default AnotherSlider;
