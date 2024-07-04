import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/Authcontext.js";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import cartReducer from './features/cartSlice.js';
import 'react-notifications-component/dist/theme.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
const store = configureStore({
  reducer: {
    cart:cartReducer
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NotificationContainer/>
  <ToastContainer></ToastContainer>
  <Provider store={store}>
        <App></App>
      </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
