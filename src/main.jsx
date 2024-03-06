import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// bootstrap js

import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";

// router config

import { BrowserRouter as Router } from "react-router-dom";
import { FrontendProvider } from "./context/FrontendContext.jsx";
import { CommonProvider } from "./context/CommonContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CommonProvider>
        <FrontendProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FrontendProvider>
      </CommonProvider>
    </Router>
  </React.StrictMode>
);
