import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/sobre" style={{ marginLeft: 8 }}>
            Sobre
          </Link>
        </header>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
