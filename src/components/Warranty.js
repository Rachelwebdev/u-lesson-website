import React from 'react';
import '../styles/EduTab.css';
import '../styles/Warranty.css';
import warranty1 from '../assets/Warranty/Warranty-1.png';
import warranty2 from '../assets/Warranty/Warranty-2.png';

function Warranty() {
  return (
    <>
      <div className="edu-container">
        <h1>WARRANTY CONDITIONS</h1>

        <div className="image-container">
          <img
            className="warranty-img"
            src={warranty1}
            alt="First slide"
          />
          <img
            className="warranty-img"
            src={warranty2}
            alt="First slide"
          />
        </div>

        <div className="description">
          <h5>
            Now you can buy a uLesson Education Tab and learning plan at a
            uLesson Experience Centre. {'>>>'}
          </h5>
          <p className="ulesson-benefits">
            Warranty Duration: The warranty period starts from when the uLesson
            Tab was originally purchased by the end user. Also the uLesson Tab
            consists of different parts, which may be covered by different types
            of warranty Illo quod mollitia voluptates beatae unde porro minus
            veritatis, dicta rem provident. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quo eaque temporibus atque alias animi
            blanditiis culpa ipsa quis natus magni!
          </p>
        </div>
      </div>
    </>
  );
}

export default Warranty;
