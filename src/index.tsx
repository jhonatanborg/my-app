import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          colors: {
            brand: ['#EBD6FD', '#EBD6FD', '#7635DC', '#7635DC', '#7635DC', '#7635DC', '#7635DC', '#7635DC', '#7635DC', '#7635DC'],
          },
          primaryColor: 'brand',
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
