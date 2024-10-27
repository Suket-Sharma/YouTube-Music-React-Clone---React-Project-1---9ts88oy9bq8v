import React, { useEffect, useState, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../romantic/Romantic.css';
import Top50Carousel from "../Top50/Top50Carousel"; 

// Import the CSS file here

const CustomLeftArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    &#8249;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    &#8250;
  </button>
);

function Top50() {
  const [albums, setAlbums] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/music/song?filter=%7B%22mood%22%3A%22romantic%22%7D', {
      headers: {
        'projectId': 'f104bi07c490'
      }
    })
      .then(response => response.json())
      .then(data => setAlbums(data.data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="App">
      <div style={{ position: 'relative' }}>
        <h1 style={{ textAlign: 'left' , marginLeft:"45px",marginTop:"45px",fontFamily: 'Roboto',fontSize:'2rem' }}>Top 50 of this Month</h1>
        <div className="custom-arrow-container">
          <CustomLeftArrow onClick={handleLeftArrowClick} />
          <CustomRightArrow onClick={handleRightArrowClick} />
        </div>
      </div>
      <div className="carousel-container">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {albums.map((album, index) => (
            <Top50Carousel key={index} album={album} 
            
            />
            
          ))}
        </Carousel>
      </div>  
    </div>
  );
}

export default Top50;
