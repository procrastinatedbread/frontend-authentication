import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { AuthContext };

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>
);
