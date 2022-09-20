import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./styles/App.css";


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
