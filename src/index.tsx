import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/main.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Inter, sans-serif',
        headings: { fontFamily: 'Inter, sans-serif' },
        colors: {
          brand: [
            '#EBD6FD',
            '#EBD6FD',
            '#7635DC',
            '#7635DC',
            '#7635DC',
            '#7635DC',
            '#7635DC',
            '#7635DC',
            '#7635DC',
            '#7635DC',
          ],
        },
        primaryColor: 'brand',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
