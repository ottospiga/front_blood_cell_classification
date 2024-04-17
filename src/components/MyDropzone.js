import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import Box from '@mui/material/Box';

export default function MyDropzone() {
  const [previewUrl, setPreviewUrl] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div>
      <div {...getRootProps()} style={{border: '1px dashed #ccc', padding: '20px', textAlign: 'center'}}>
        <input {...getInputProps()} />
        {
          isDragActive 
            ? <p>Solte os arquivos aqui ...</p> 
            : <p>Arraste e solte alguns arquivos aqui ou clique para selecionar</p>
        }
      </div>
      
      {previewUrl && (
        <div>
          <p>Preview da imagem:</p>
          <img src={previewUrl} alt="Preview da imagem" style={{maxWidth: '100%', maxHeight: '200px'}} />
        </div>
      )}
    </div>
  );
}

