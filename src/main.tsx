import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FormProvider } from "./context/FormContext.tsx";
import { DataProvider } from "./context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </DataProvider>
  </React.StrictMode>,
);
