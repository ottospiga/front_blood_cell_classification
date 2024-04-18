'use client'
import React, { useEffect, useState, useCallback, useRef} from 'react';
import { Box, Button, Card, Paper, Grid, Typography, } from '@mui/material';
import TextField from '@mui/material/TextField';
import MyDropzone from '@/components/MyDropzone';

import AppBarAplication from '@/components/AppBarAplication';
import api from '@/utils/api';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function Home() {
  const searchTextRef = useRef('');
  const [data, setData] = useState([0,0,0,0,0,0,0,0]);
  
  const cells = {
    0 : 'Basophil',
    1 : 'Eosinophil',
    2 : 'Erythroblast',
    3 : 'Ig',
    4 : 'Lymphocyte',
    5 : 'Monocyte',
    6 : 'Neutrophil',
    7 : 'Platelet',
  }

  // const handleSendButtonClick = () => {
  //   console.log('Typed text:', searchTextRef.current.value);
  // };


  // useEffect(() => {
    // api.get('/clientes')
    //   .then((res) => { 
      // console.log(res);
      // setData(res?.data); 
    // } );
    // console.log(data)
  // }, [data]);
  
  return (
    <>
      <AppBarAplication />

      <Grid sx={{ flexGrow: 1, justifyContent:'center', }} container spacing={2} >
        {/* <Typography variant="h2" sx={{ my:2 }}> 
          blood_cell_classification
          </Typography> */}
      
        <Grid item xs={10} md={5} sx={{ mt:2, mx:1, alignItems: 'center', }} >
          <MyDropzone setData={setData}/>
        </Grid>

        <Grid item xs={10} md={6} sx={{ mt:2, alignItems: 'center', }} >
          
          <Paper sx={{p:3}}>
            <Box sx={{display:'flex', }}>

            {/* <Typography variant="h2" sx={{ my:2 }}> 
            { data[1] }
            </Typography> */}

              {/* <TextField 
                fullWidth 
                label="Type here to search" 
                variant="outlined" 
                inputRef={searchTextRef}
                />
              <Button sx={{ml:3}} variant="contained"  onClick={handleSendButtonClick} > Send </Button> */}

          {/* <TableContainer component={Paper}> */}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Cells</TableCell>
                      <TableCell>Probability</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((probabilidade, index) => (
                      <TableRow key={index}>
                        <TableCell>{cells[index]}</TableCell>
                        {/* <TableCell>{probabilidade}</TableCell> */}
                        <TableCell>{(probabilidade * 100).toFixed(2)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Box>
          </Paper>

        </Grid>

      </Grid>
    </>
  );
}
