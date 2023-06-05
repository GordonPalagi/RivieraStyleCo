import React from 'react';
import '../About/About.css'
import GroupPhoto from '../../Assets/fashion_photo.avif';
import Wheel from '../../Assets/wheel.png';

function About() {
  return (
    <>
    <div className="about-page">
        <div className='window'>
            <img className='background-image' src={GroupPhoto} alt="" />
        </div>
        <div className='inner-about-con'>
            <img className='background-wheel' src={Wheel} alt="" />
            <h1 className="about-title">Welcome to Riviera Style Co.</h1>
            <p className="about-description">
                Founded with elegance in mind, Riviera Style Co. is a renowned luxury brand that exudes timeless sophistication. Our journey began with a vision to deliver tasteful and stylish fashion, embodying a perfect balance between drama and restraint.
            </p>
            <p className="about-description">
                At Riviera Style Co., we celebrate the essence of refined craftsmanship and curated design. Each piece is meticulously created to capture the allure of the Riviera lifestyle and elevate your sense of style.
            </p>
            <p className="about-description">
                Embracing the spirit of exclusivity, Riviera Style Co. is dedicated to providing you with an extraordinary shopping experience. Discover our exquisite collections and indulge in the elegance that defines Riviera Style Co.
            </p>
        </div>
    </div>
    </>
  );
}

export default About;
