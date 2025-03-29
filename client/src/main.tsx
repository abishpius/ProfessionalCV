import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for fonts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
  
  .font-code {
    font-family: 'Fira Code', monospace;
  }
  
  section {
    scroll-margin-top: 80px;
  }
`;

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
