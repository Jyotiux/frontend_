import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import sliderImg2 from "../../assets/images/slider/3.png";
import "../Banner/banner.css"
const Banner = () => {
  return (
    <section className='slider'>
      <Carousel variant="dark">
      <Carousel.Item>
        <img src={sliderImg} className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <p>Style Up, Pay Less – Shop the Hottest Looks Today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <p>Wardrobe Upgrade? Grab 50% Off Fashion Essentials!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImg2} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          <p>
          New Season, New You – Fresh Fits Just Dropped!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Banner