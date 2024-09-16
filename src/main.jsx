import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-figtree bg-slate-100">
      <App />
    </div>
  </StrictMode>,
);
