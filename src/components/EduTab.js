import React from 'react';
import '../styles/EduTab.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import edutab1 from '../assets/eduTab/edu-tab-1.png';
import edutab2 from '../assets/eduTab/Edu-tab-2.png';
import edutab3 from '../assets/eduTab/Edu-tab-3.png';
import edutab4 from '../assets/eduTab/Edu-tab-4.png';
import edutab5 from '../assets/eduTab/Edu-tab-5.png';
import edutab6 from '../assets/eduTab/Edu-tab-6.png';
import edutab7 from '../assets/eduTab/Edu-tab-7.png';
import edutab8 from '../assets/eduTab/Edu-tab-8.png';

function EduTab() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="edu-container">
        <h1>BENEFITS OF uLESSON TABLET</h1>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-container custom-carousel"
        >
          <Carousel.Item>
            <img
              className=""
              src={edutab1}
              alt="First slide"
            />
            <img
              className=""
              src={edutab2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src={edutab3}
              alt="Second slide"
            />
            <img
              className=""
              src={edutab4}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src={edutab5}
              alt="Third slide"
            />
            <img
              className=""
              src={edutab6}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src={edutab7}
              alt="Third slide"
            />
            <img
              className=""
              src={edutab8}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="description">
          <h5>
            NETWORK CONNECTION {'>>>'} INTERFACE CONFIGURATION {'>>>'} SOFTWARE
            {'>>>'} DEVICE HARDWARE {'>>>'} CAMERA
          </h5>
          <p className="ulesson-benefits">
            Embedded with Family Link app which helps to monitoe the activities
            of a user or child. It accepts APK file. Its a digital wellbeing
            which allows you to see apps and websites you use mostly and set
            daily limits. It has Cast feature where you can connect your device
            to the same Wi-Fi network as your Android TV. It has Screen
            recording, A-Gps and Fm radio.
          </p>
        </div>
      </div>
    </>
  );
}

export default EduTab;
