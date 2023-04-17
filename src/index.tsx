import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='h-screen w-screen bg-[#09090B]'>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
