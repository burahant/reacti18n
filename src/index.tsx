import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

import Router from "./router";
import { BrowserRouter } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App = () => (
  <BrowserRouter>
    <React.StrictMode>
      <React.Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </React.Suspense>
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
