import React from 'react';
import MovieCard from './MovieCard';

const HomeMovies = (props) => {
  const { movies } = props;

  return (
    <div className='container'>
      {
        movies.map((item, index) =>
          <MovieCard key={index} movie={item}/>
        )

      }
    </div>
  );
};

export default HomeMovies;
