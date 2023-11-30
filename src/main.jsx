import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
