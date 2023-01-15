import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { loadMovie } from "../reducers/movie";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { movieList, loadMovieDone } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(loadMovie());
  }, []);

  if (loadMovieDone) {
    return (
      <Wrapper>
        {movieList.map((i) => (
          <MovieCard key={i.id} movie={i} />
        ))}
      </Wrapper>
    );
  }
};

export default Home;
