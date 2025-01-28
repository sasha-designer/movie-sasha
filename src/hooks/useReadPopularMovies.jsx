import axios from "axios";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * 인기 영화 리스트를 조회하는 함수
 * @returns {Object} - readPopularMovies 함수를 반환
 */
const useReadPopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const readPopularMovies = useCallback(
    throttle(async (page) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            params: { language: "ko-KR", page },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${APIKEY}`,
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        setMovies((prevMovies) =>
          page === 1
            ? response.data.results
            : [...prevMovies, ...response.data.results]
        );
        setHasMore(response.data.page < response.data.total_pages);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    }, 2000), // 2초 간격으로 요청 제한
    []
  );

  useEffect(() => {
    readPopularMovies(page);
  }, [page, readPopularMovies]);

  return { readPopularMovies, movies, hasMore };
};

export default useReadPopularMovies;
