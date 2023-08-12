// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import store from "./redux/store";
// import { Provider } from 'react-redux';
// import './index.css'
// import App from './App'


// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);



// root.render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </React.StrictMode>
//     </Provider>
// )


import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
