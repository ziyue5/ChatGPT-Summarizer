import React from 'react';
import './App.css';
import { Box, Button, Typography } from '@mui/material';

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#7393B3" }} height={"50px"}>
        <Typography variant='h5' sx={{ mt: 1.5 }}>ChatGPT Summarizer</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Button disableRipple variant="contained">
          Summarize current page
        </Button>
      </Box>
    </Box>
  );
}

export default App;
