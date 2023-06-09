import React from 'react';
import '../styles/EduTab.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Troubleshoot1 from '../assets/Troubleshoot/Troubleshoot-guide-1.png';
import Troubleshoot2 from '../assets/Troubleshoot/Troubleshoot-guide-2.png';
import Troubleshoot3 from '../assets/Troubleshoot/Troubleshoot-guide-3.png';
import Troubleshoot4 from '../assets/Troubleshoot/Troubleshoot-guide-4.png';
import Troubleshoot5 from '../assets/Troubleshoot/Troubleshoot-guide-5.png';
import Troubleshoot6 from '../assets/Troubleshoot/Troubleshoot-guide-6.png';
import Troubleshoot7 from '../assets/Troubleshoot/Troubleshoot-guide-7.png';
import Troubleshoot8 from '../assets/Troubleshoot/Troubleshoot-guide-8.png';
import Troubleshoot9 from '../assets/Troubleshoot/Troubleshoot-guide-9.png';
import Troubleshoot10 from '../assets/Troubleshoot/Troubleshoot-guide-10.png';
import Troubleshoot11 from '../assets/Troubleshoot/Troubleshoot-guide-11.png';
import Troubleshoot12 from '../assets/Troubleshoot/Troubleshoot-guide-12.png';

function Troubleshooting() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="edu-container">
        <h1>uLESSON TROUBLESHOOTING</h1>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-container custom-carousel"
        >
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot1}
                alt="First slide"
              />
              <img
                className=""
                src={Troubleshoot2}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot3}
                alt="Second slide"
              />
              <img
                className=""
                src={Troubleshoot4}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot5}
                alt="Third slide"
              />
              <img
                className=""
                src={Troubleshoot6}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot7}
                alt="Third slide"
              />
              <img
                className=""
                src={Troubleshoot8}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot9}
                alt="Third slide"
              />
              <img
                className=""
                src={Troubleshoot10}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Troubleshoot11}
                alt="Third slide"
              />
              <img
                className=""
                src={Troubleshoot12}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="description">
          <h5>
            APP MINIMUM REQUIREMENTS {'>>>'} uLESSON TAB TROUBLESHOOTING {'>>>'}{' '}
            SOFTWARE {'>>>'} iOS TROUBLESHOOTING {'>>>'} WEB TROUBLESHOOTING{' '}
            {'>>>'} NETWORK TROUBLESHOOTING {'>>>'}
          </h5>
          <p className="ulesson-benefits">
            Internal troubleshooting guide for common customer complaints. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dignissimos totam ea necessitatibus iste, dolorum voluptate deleniti
            aspernatur velit? Minus provident ipsum architecto magnam, quia
            magni expedita eos minima. Soluta nulla voluptates labore
            accusantium quo recusandae incidunt aspernatur, expedita ipsam,
            consequatur asperiores dignissimos quia, voluptatibus sequi illo
            distinctio repellendus. Ullam.
          </p>
        </div>
      </div>
    </>
  );
}

export default Troubleshooting;
