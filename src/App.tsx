import React from 'react';
import './App.css';
import { Box, Button, Typography } from '@mui/material';

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#7393B3" }} height={"50px"}>
        <Typography variant='h5' sx={{ mt: 1.5 }}>ChatGPT Summarizer</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ mt: 2 }} flexDirection={"column"}>
        <Button disableRipple variant="contained" sx={{ width: "260px"}}>
          Summarize current page
        </Button>
        <Button disableRipple variant="contained" sx={{ width: "260px", mt: 2 }}>
          Show relevant sources
        </Button>
      </Box>
      <Box sx={{position: "fixed", bottom: 0, backgroundColor: "#7393B3", textAlign: "center", width: "600px"}}>
        <Typography sx={{ py: 2 }}>
          CS 510 Project @ UIUC
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
