import React, { useState } from 'react';
import './App.css';
import { Box, Button, Divider, Typography } from '@mui/material';
import { DOMMessage, DOMMessageResponse } from './types';
import { Configuration, OpenAIApi } from 'openai';

function App() {
  const [source, setSource] = useState<any>(null);
  const [summary, setSummary] = useState<any>(null);
  const [links, setLinks] = useState<any>(null);

  const handleSummarize = () => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
    });

    delete configuration.baseOptions.headers['User-Agent'];

    const openai = new OpenAIApi(configuration);

    const prompt = "Summarize it: " + source;

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048
    }).then((response) => {
      console.log(prompt);
      console.log(response);
      setSummary(response.data.choices[0].message?.content);
    });
  }

  const getLinks = () => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
    });

    delete configuration.baseOptions.headers['User-Agent'];

    const openai = new OpenAIApi(configuration);

    const prompt = "Give me 5 relevant websites and their links based on: " + summary ;

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048
    }).then((response) => {
      console.log(prompt);
      console.log(response);
      setLinks(response.data.choices[0].message?.content);
    });
  }

  /*
    Adapted code from
    Source: Creating a Chrome extension with React and TypeScript
    Author: Juan Cruz Martinez
    Website: LogRocket Blog
    Date: August 12, 2021
    URL: https://blog.logrocket.com/creating-chrome-extension-react-typescript/
  */

  React.useEffect(() => {
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          setSource(response.text);
        });
    });
  }, []);

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
        {summary && <Button disableRipple variant="contained" sx={{ width: "260px", mt: 2 }} onClick={getLinks}>
          Show relevant sources
        </Button>}
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
