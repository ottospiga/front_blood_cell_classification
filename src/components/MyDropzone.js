import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Box, Paper } from '@mui/material';
import api from '@/utils/api';

export default function MyDropzone({setData}) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);

    // Enviar imagem para o backend quando um arquivo é selecionado
    const formData = new FormData();
    formData.append('image', file);
    api.post('/analyse', formData)
      .then(response => {
        // console.log('Resposta do backend:', response.data);
        console.log(response.data.predictions[0]);
        setData(response?.data?.predictions[0]);
      })
      .catch(error => {
        console.error('Erro ao enviar imagem para o backend:', error);
      });
  }, []);

  // const uploadImage = async (imageFile) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', imageFile);

  //     const response = await api.post('/analyse', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });

  //     console.log('Resposta do backend:', response.data);
  //   } catch (error) {
  //     console.error('Erro ao fazer upload da imagem:', error);
  //   }
  // };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <Paper sx={{ p:3, width: '100%'}}>

      <div {...getRootProps()} 
        style={{
          border: '1px dashed #ccc', 
          padding: '20px', 
          textAlign: 'center',
          // width: '100%' 
          }}>
        <input {...getInputProps()} />
        {
          isDragActive 
            ? <p>Drop the files here ...</p> 
            : <p>Drag and drop some files here or click to select</p>
        }
      </div>
      
      {/* <Box sx={{display:'flex',  }}> */}
        {previewUrl && (
          <div>
            <p>Preview:</p>
            <img 
              src={previewUrl} 
              alt="Image preview" 
              style={{maxWidth: '100%', maxHeight: '200px'}} 
              // style={{width: '100%', maxHeight: '100%'}} 
              />
          </div>
        )}
      {/* </Box> */}

        {/* <Button
          sx={{ml:3}}
          variant="contained" 
          // onClick={handleSendButtonClick}
          onClick={() => uploadImage(previewUrl)}
          > Analyse </Button> */}

    </Paper>
  );
}

