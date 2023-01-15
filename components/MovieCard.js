import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-bottom: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Img = styled.img`
  border-radius: 10px;
`;

const Title = styled.div`
  margin-top: 10px;
  width: 230px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const MovieCard = ({ movie }) => {
  return (
    <Wrapper>
      <CardWrapper>
        <Img src={movie.medium_cover_image} />
        <Title>{movie.title}</Title>
        <Rating>{movie.rating}</Rating>
      </CardWrapper>
    </Wrapper>
  );
};

export default MovieCard;
