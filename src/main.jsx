import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(

  
    <React.StrictMode>
    <Provider store={store}>
    <Route>
      <App />
    </Route>
    </Provider>
  </React.StrictMode>
 

)