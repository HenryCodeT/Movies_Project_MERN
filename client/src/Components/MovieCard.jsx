import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;
  const IMAGEPAth = 'https://image.tmdb.org/t/p/w500';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='movie-card'
    >

      <Link className='title-card' to={`/movie/${movie.id}`}>
        {
          movie.poster_path
            ? <img className='movie-cover' src={`${IMAGEPAth + movie.poster_path}`} />
            : ''
        }
        {movie.title}
      </Link>
    </motion.div>
  );
};

export default MovieCard;
