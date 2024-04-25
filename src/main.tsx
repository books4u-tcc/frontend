import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "./theme.ts";
import './index.css'
import { RouterRoot } from './router/RouterRoot.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <RouterRoot />
    </ChakraProvider>
  </React.StrictMode>
);
    
