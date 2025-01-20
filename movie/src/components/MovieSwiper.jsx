// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import React from "react";

const SwiperContainer = styled.div`
  background-color: black;
  .swiper {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 200px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export default function MovieSwiper({ movies }) {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    setImages(
      movies.map((movie) => {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      })
    );
  }, [movies]);

  const navigate = useNavigate();

  return (
    <SwiperContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate(`/detail/${movies[index].id}`)}
          >
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}
