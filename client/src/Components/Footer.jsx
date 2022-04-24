import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright () {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {'Copyright © '}
      <Link color="#ffffff" href="https://mui.com/">
      TMRV
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer () {
  return (
    <Box component="footer" sx={{ bgcolor: '#002C3E', py: 2 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      </div>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
