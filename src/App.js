import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Routes from "./routes";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <header>
            <Link to="/">Home</Link>
            <Link to="/sobre" style={{ marginLeft: 8 }}>
              Sobre
          </Link>
          </header>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
