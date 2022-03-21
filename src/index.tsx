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
            brand: ['#F0BBDD', '#ED9BCF', '#4C366B', '#4C366B', '#4C366B', '#4C366B', '#4C366B', '#4C366B', '#4C366B', '#4C366B'],
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
