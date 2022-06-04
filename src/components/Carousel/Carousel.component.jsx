import React, { useState } from "react";
import './Carousel.styles.scss';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);

    const filteredKeys = Object.keys(images).filter(key => {
        if (typeof images[key] !== 'object' && images[key] !== null) {
            return key;
        };
    });

    const length = filteredKeys.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }

    const slides = filteredKeys.map((key, i) => {
        return (
            <div key={i} className='slide'>
                <img src={images[key]} alt='image' className="img" />
            </div>
        );
    });


    return (
        <div className="Carousel">
            <div className="btn">
                <AiOutlineArrowLeft className="BtnLeft" onClick={nextSlide} />
            </div>
            {slides[current]}
            <div className="btn">
                <AiOutlineArrowRight className="BtnRight" onClick={prevSlide} />
            </div>
        </div>
    )
};

export default Carousel; 