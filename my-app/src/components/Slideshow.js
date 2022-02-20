import '../styles/Slideshow.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { SliderData } from './SliderData';

const colors = ["#FFBB28", "#00C49F", "#FFBB28"];

const delay = 9999;

function Slideshow() {
    
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {SliderData.map((slide, index) => { 
          return(
                <div
                key={index}
                className={"slide" ? 'slide active' : 'slide'}
                style={slide}>
                  {(<img src={slide.image} alt='test' className='image'/>)}
                </div>
          )
        
        })}
        
        
      </div>

      <div className="slideshowDots">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
