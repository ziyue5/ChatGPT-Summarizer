import React, { useState } from 'react';
import './App.css';
import { Box, Button, Divider, Typography } from '@mui/material';

function App() {
  const [summary, setSummary] = useState<any>(null);
  const [links, setLinks] = useState(null);

  const handleSummarize = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => setSummary(response.body));
  }

  const getLinks = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => setLinks(response.body));
  }

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#7393B3" }} height={"50px"}>
        <Typography variant='h5' sx={{ mt: 1.5 }}>ChatGPT Summarizer</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ mt: 2 , mb: 16 }} flexDirection={"column"}>
        <Button disableRipple variant="contained" sx={{ width: "260px"}} onClick={handleSummarize}>
          Summarize current page
        </Button>
        {summary && 
        <Box sx={{ m: 2 }}>
          <Divider/>
          <Typography>{summary}</Typography>
          <Divider/>
        </Box>
        }
        <Button disableRipple variant="contained" sx={{ width: "260px", mt: 2 }} onClick={getLinks}>
          Show relevant sources
        </Button>
        {links && 
        <Box sx={{ m: 2 }}>
          <Divider/>
          <Typography>{links}</Typography>
          <Divider/>
        </Box>
        }
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
