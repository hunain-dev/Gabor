import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Usecontext from "./Components/pages/Usecontext/Usecontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Usecontext>
    <BrowserRouter>
      <Header />  
      <App />
      <Footer />
    </BrowserRouter>
    </Usecontext>
   
  </StrictMode>
);
