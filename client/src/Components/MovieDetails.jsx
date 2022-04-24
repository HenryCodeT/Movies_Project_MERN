/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material';
import ReviewForm from './ReviewForm';

const MovieDetails = (props) => {
  const { movie } = props;
  const URLIMAGE = 'https://image.tmdb.org/t/p/w500/';
  const [loaded, setLoaded] = useState(false);
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    if (movie) {
      const trailerFind = movie?.videos?.results.find(vid => vid.official === true);
      setTrailer(trailerFind?.key);
      setLoaded(true);
    }
  }, [movie]);

  const styles = {
    paperContainer: {
      // height: 800,
      backgroundImage: `url(${URLIMAGE + movie?.backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width: '100vw',
      height: '100%'
    }
  };

  return (
    loaded &&
      <Paper style={styles.paperContainer} sx={{ color: '#ffffff' }}>
        <div className='poster-container'>
          <div className='poster img-poster'>
            <CardMedia className='box-shadow' style={{ width: '200px' }} component="img" image={`${URLIMAGE + movie?.poster_path}`} />
          </div>
          <iframe
            style={{ width: '700px' }}
            className='movie-trailer box-shadow'
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
          />
        </div>
        <div className='title-movie'>
          <Typography align='center' variant='h5'>{movie?.title}</Typography>
          <Typography align='center' variant='h6'>{movie?.tagline}</Typography>
        </div>
        <div className='movie-detail'>
          <div className='col-1'>
            <Typography variant='h6'>Overview:</Typography>
            <Typography variant='p'>{movie?.overview}</Typography>
            <Typography variant='h6'>Runtime: {movie?.runtime} minutes</Typography>
            <Typography variant='h6'>Release Date: {movie?.release_date}</Typography>
            <Typography variant='h6'>Vote average: {movie?.vote_average}</Typography>
          </div>
          <div className='col-2'>
            <Typography variant='h6'>Genres:</Typography>
            {
              movie.genres
                ? <ul>
                  {
                    movie.genres.map((item, index) =>
                      <li key={index}>{item.name}</li>
                    )
                  }
                </ul>
                : 'no genres'
            }
            <Typography variant='h6'>Budget:${movie?.budget}</Typography>
            <Typography variant='h6'>Revenue:${movie?.revenue}</Typography>
          </div>
          <div className='col-3'>
            <Typography variant='h6'>Reviews for: {movie.title}</Typography>
            <ReviewForm/>
          </div>
        </div>
      </Paper>
  );
};

export default MovieDetails;
