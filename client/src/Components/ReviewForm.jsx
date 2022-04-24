/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Rating, TextField } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const ReviewForm = () => {
  const initialValue = {
    review: '',
    rating: null
  };

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);
  const [errorReview, setErrorReview] = useState(false);
  const [errorRating, setErrorRating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    console.log(rating);
  };
  return (
    <div>
      <Box className='review-box' component="form" noValidate onSubmit={handleSubmit} sx={{ bgcolor: '#ffffff', mt: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={errorReview}
              fullWidth
              id="review"
              label="Review"
              name="review"
              value={review}
              multiline
              variant="filled"
              onChange={ (event) => {
                setReview(event.target.value);
              }}
              //   helperText={ isErrorEmail ? userErrorMessages.emailMessage : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Rating
              name="rating"
              value={rating}
              onChange={
                (event, newValue) => {
                  setRating(newValue);
                }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          style={{
            borderRadius: 35,
            backgroundColor: '#007c91'
          }}
          variant="contained" endIcon={<SendIcon />}
        >
            Submit
        </Button>
      </Box>
    </div>
  );
};

export default ReviewForm;
