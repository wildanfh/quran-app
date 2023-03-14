import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import QuranApp from "./components/QuranApp";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <QuranApp/>
  </BrowserRouter>
);
