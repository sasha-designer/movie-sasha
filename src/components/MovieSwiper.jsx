// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import React from "react";

const SwiperContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    object-fit: cover;
  }
`;

export default function MovieSwiper({ movies }) {
  console.log("MoiveSwiper.jsx 실행");
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    setImages(
      movies.map((movie) => {
        return `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
      })
    );
  }, [movies]);

  const navigate = useNavigate();

  return (
    // <SwiperContainer>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          onClick={() => navigate(`/detail/${movies[index].id}`)}
        >
          <img src={image} style={{ width: "100%" }} />
        </SwiperSlide>
      ))}
    </Swiper>
    // </SwiperContainer>
  );
}
