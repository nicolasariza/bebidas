import React, { Fragment } from "react";
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
