import { Container, Grid } from '@mui/material';
import React from 'react';

function GridContainerUp (props) {
  
  return (
    <Grid container
      spacing={0}
      direction='column'
      className={props.className}
      sx={{ minHeight: 'calc(100% - 64px)', top: '64px', position: 'absolute' }} // 64px is height of header
    >
      <Container maxWidth='lg' >
        <br />
        <br />
        <br />
        <br />
        {props.children}

      </Container>
    </Grid>
  );
}

export default GridContainerUp;
