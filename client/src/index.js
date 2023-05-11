import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import AOS from 'aos';
import './index.css'
import 'aos/dist/aos.css'; 
AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
