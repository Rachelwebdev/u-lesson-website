import React from 'react';
import '../styles/EduTab.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import expCent1 from '../assets/expCent/Exp-cent-1.png';
import expCent2 from '../assets/expCent/Exp-cent-2.png';
import expCent3 from '../assets/expCent/Exp-cent-3.png';
import expCent4 from '../assets/expCent/Exp-cent-4.png';
import expCent5 from '../assets/expCent/Exp-cent-5.png';
import expCent6 from '../assets/expCent/Exp-cent-6.png';

function ExpCent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="edu-container">
        <h1>EXPERIENCE CENTER & SKIT STORE</h1>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-container custom-carousel"
        >
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={expCent1}
                alt="First slide"
              />
              <img
                className=""
                src={expCent2}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={expCent3}
                alt="Second slide"
              />
              <img
                className=""
                src={expCent4}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={expCent5}
                alt="Third slide"
              />
              <img
                className=""
                src={expCent6}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="description">
          <h5>
            {'>>>'} Now you can buy a uLesson Education Tab and learning plan at
            a uLesson Experience Centre. {'>>>'}
          </h5>
          <p className="ulesson-benefits">
            Now you can buy a uLesson Education Tab and learning plan at a
            uLesson Experience Centre. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nemo accusamus delectus reiciendis, velit iusto
            veritatis ullam expedita at qui iste aspernatur maxime eum
            laudantium aliquam itaque veniam inventore, harum, minus earum
            quaerat quasi dicta atque dolorem impedit. Impedit sunt ab a
            adipisci, voluptatum illum accusantium nostrum ipsam minima
            blanditiis saepe?
          </p>
        </div>
      </div>
    </>
  );
}

export default ExpCent;
