import React, { useEffect, useState, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../Albums/Albums.css';
import AlbumsCarousel from "../Albums/AlbumsCarousel"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const carouselRef = useRef(null); 

  // const artistList = albums.map((item)=>item.artists.name).join(" & ");

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => 
    {
      try {
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/music/album?limit=300",
          {
            headers: {
              projectID: "f104bi07c490",
            },
          }
        );
        console.log(response.data.data);
        setAlbums(response.data.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
        // Optionally handle the error
      }
    };

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
        <h1 style={{ textAlign: 'left' , marginLeft:"45px",marginTop:"45px",fontFamily: 'Roboto',fontSize:'2rem' }}>Albums</h1>
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
           { albums.map((album,index) => (
              <AlbumsCarousel
                album={album}
                key={album._id}
               
 
              />
              
            ))}
        </Carousel>
      </div>  
    </div>
  );
}

export default Albums;
