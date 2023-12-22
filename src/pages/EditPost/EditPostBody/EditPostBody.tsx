import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface EditPostBodyProps {
    id: number;
    title: string;
    body: string;
  }


  const EditPostBody: React.FC<EditPostBodyProps> = ({ id, title, body }) => {
    
    return (
    <Box
      sx={{
        width: '80%',
        margin: 'auto',
        textAlign: 'left',
        paddingTop: '20px',
      }}
    >
      <div>
        <Typography variant="h4" fontWeight="bold" marginTop="20px" marginBottom="20px">Edit Your Post Here</Typography>
      </div>

      <div>
        <Typography variant="h6">Title</Typography>
        <TextField fullWidth id="title" variant="outlined" margin="normal" defaultValue={title}/>
      </div>

      <div>
        <Typography variant="h6">Description</Typography>
        <TextField
          fullWidth
          multiline
          rows={5}
          id="description"
          
          variant="outlined"
          margin="normal"
          defaultValue={body}
        />
      </div>

      <div>
      <Button
          variant="contained"
          sx={{ bgcolor: "#2196F3" }}      
        >
            Edit
        </Button>
      </div>
    </Box>
  );
};

export default EditPostBody;
