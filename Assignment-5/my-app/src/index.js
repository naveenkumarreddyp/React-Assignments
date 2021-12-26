import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage/homepage';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import './index.css';
import Postview from './postview/Postview';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path='/Postview' element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
