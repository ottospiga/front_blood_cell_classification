'use client'
import React, { useEffect, useState, useCallback, useRef} from 'react';
import { Box, Button, Card, Paper, Grid, Typography, } from '@mui/material';
import TextField from '@mui/material/TextField';
import MyDropzone from '@/components/MyDropzone';

import AppBarAplication from '@/components/AppBarAplication';
import api from '@/utils/api';


export default function Home() {
  const searchTextRef = useRef('');
  // const [data, setData] = useState([]);
  
  const handleSendButtonClick = () => {
    console.log('Typed text:', searchTextRef.current.value);
  };

  useEffect(() => {
    // api.get('/clientes')
    //   .then((res) => { 
      // console.log(res);
      // setData(res?.data); 
    // } );
  }, []);
  
  return (
    <>
      <AppBarAplication />

      <Grid sx={{ flexGrow: 1, justifyContent:'center', }} container spacing={2} >
            {/* <Typography variant="h2" sx={{ my:2 }}> 
            blood_cell_classification
            </Typography> */}
            
      
        <Grid item xs={10} md={5} sx={{ mt:2, mx:1, alignItems: 'center', }} >
          <Paper sx={{p:3}}>
            <Box sx={{display:'flex', }}>
              <MyDropzone />
              <Button
                sx={{ml:3}}
                variant="contained" 
                onClick={handleSendButtonClick}
                > Send </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={10} md={6} sx={{ mt:2, alignItems: 'center', }} >
          
          <Paper sx={{p:3}}>
            <Box sx={{display:'flex', }}>
              <TextField 
                fullWidth 
                label="Type here to search" 
                variant="outlined" 
                inputRef={searchTextRef}
                />
              <Button
                sx={{ml:3}}
                variant="contained" 
                onClick={handleSendButtonClick}
                > Send </Button>
            </Box>
          </Paper>

        </Grid>

      </Grid>
    </>
  );
}
