import React from 'react';
import '../styles/EduTab.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Whatsapp1 from '../assets/Whatsapp/WhatsApp-1.png';
import Whatsapp2 from '../assets/Whatsapp/WhatsApp-2.png';
import Whatsapp3 from '../assets/Whatsapp/WhatsApp-3.png';
import Whatsapp4 from '../assets/Whatsapp/WhatsApp-4.png';
import Whatsapp5 from '../assets/Whatsapp/WhatsApp-5.png';
import Whatsapp6 from '../assets/Whatsapp/WhatsApp-6.png';
import Whatsapp7 from '../assets/Whatsapp/WhatsApp-7.png';
import Whatsapp8 from '../assets/Whatsapp/WhatsApp-8.png';
import Whatsapp9 from '../assets/Whatsapp/WhatsApp-9.png';

function WhatsappOTP() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="edu-container">
        <h1>WHATSAPP OTP</h1>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-container custom-carousel"
        >
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Whatsapp1}
                alt="First slide"
              />
              <img
                className=""
                src={Whatsapp2}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Whatsapp3}
                alt="Second slide"
              />
              <img
                className=""
                src={Whatsapp4}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Whatsapp5}
                alt="Third slide"
              />
              <img
                className=""
                src={Whatsapp6}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Whatsapp7}
                alt="Third slide"
              />
              <img
                className=""
                src={Whatsapp8}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className=""
                src={Whatsapp9}
                alt="Third slide"
              />
              <img
                className=""
                src={Whatsapp1}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="description">
          <h5>
            STEP 1 {'>>>'} STEP 2 {'>>>'} STEP 3 {'>>>'} STEP 4 {'>>>'} STEP 5{' '}
            {'>>>'} STEP 6 {'>>>'} STEP 7 {'>>>'} STEP 8 {'>>>'}
          </h5>
          <p className="ulesson-benefits">
            Open the uLesson App on your device {'>>>'} Insert your phone number
            and click next {'>>>'} The app will first attempt to deliver an OTP
            to you via SMS {'>>>'} If at first you don't get an OTP via SMS,
            select "Try Another Method" {'>>>'} Select "Get OTP via Whatsapp"{' '}
            {'>>>'} Your OTP will be delivered to your uLesson number on
            Whatsapp {'>>>'} Input your OTP code and select "continue". If you
            don't get an OTP code, you can request another OTP code when the
            timer runs out. {'>>>'} Congratulations, you have successfully
            requested an OTP via Whatsapp. Complete the registration and enjoy
            the uLesson App.
          </p>
        </div>
      </div>
    </>
  );
}

export default WhatsappOTP;
