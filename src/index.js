import React from 'react';
import ReactDOM from 'react-dom/client';
import Temp from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Temp sx={{width:"100%"}}/>
  </React.StrictMode>
);


