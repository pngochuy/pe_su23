import logo from "./logo.svg";
import "./App.css";
import MenuForm from "./components/MenuForm";
import { BrowserRouter } from "react-router-dom";

import React from "react";

import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
