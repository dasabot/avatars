import React from 'react';
import ReactDOM from 'react-dom/client';
import AvatarsApp from './components/avatars-app/AvatarsApp';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvatarsApp />
  </React.StrictMode>
);

