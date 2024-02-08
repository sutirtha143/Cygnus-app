import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonStyle() {
  return (
    <Stack spacing={2} direction="row">

      <Link to='/'>
      <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#22C55E', color: 'white', textTransform:'none', margin: '0',
      '&:hover, &:focus, &:active': { 
        backgroundColor: '#22C55E', 
        boxShadow: 'none', 
      }, }}>
      
      
      LOG IN</Button>
      </Link>
    </Stack>
  );
}