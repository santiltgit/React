import React, { useState, useEffect } from 'react';

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            style={{ display: index === current ? 'block' : 'none' }}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className="image" />
            )}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
            aria-label={`Seleccionar imagen ${idx + 1}`}
          />
        ))}
      </div>
      <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
    </section>
  );
}

export default Slider;