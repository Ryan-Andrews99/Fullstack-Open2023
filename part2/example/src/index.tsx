import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const notes = 
[
  {
    key: 1,
    content: 'hello', 
    important: true
  },
  {
    key: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    key: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App notes= {notes} />
  </React.StrictMode>
);
