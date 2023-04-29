import { DOMMessage, DOMMessageResponse } from '../types';

/*
    Adapted code from
    Source: Creating a Chrome extension with React and TypeScript
    Author: Juan Cruz Martinez
    Website: LogRocket Blog
    Date: August 12, 2021
    URL: https://blog.logrocket.com/creating-chrome-extension-react-typescript/
*/
 
const messagesFromReactAppListener = (
   msg: DOMMessage,
   sender: chrome.runtime.MessageSender,
   sendResponse: (response: DOMMessageResponse) => void) => {
 
   const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

   let text = "";
   for (let i = 0; i < textElements.length; i++) {
        const element = textElements[i] as HTMLElement;
        text += element.innerText + '\n';
   }

   const returnedText = text.split(' ').slice(200, 1400).join(' ');
 
   const response: DOMMessageResponse = {
       text: returnedText
   };

   sendResponse(response);
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
