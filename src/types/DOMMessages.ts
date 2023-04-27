/*
    Adapted code from
    Source: Creating a Chrome extension with React and TypeScript
    Author: Juan Cruz Martinez
    Website: LogRocket Blog
    Date: August 12, 2021
    URL: https://blog.logrocket.com/creating-chrome-extension-react-typescript/
*/

export type DOMMessage = {
    type: 'GET_DOM'
  }
  
  export type DOMMessageResponse = {
    text: string;
  }
