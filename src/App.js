import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import GlobalStyle from "./components/GlobalStyles";
import Form from "./components/Form";
import Header from "./components/Header"

function App() {
  return (
    <GlobalStyle>
      <div style={{position: "fixed", top: "0", right: "0", bottom: "0", left: "0", display: "flex", justifyContent: "center", alignItems: "center", background: "#A7D7C5"}}>
        <Routes>
          <Route path="/signup" element={ <Form type="signup" /> } />
          <Route path="/login" element={ <Form type="login" /> } />
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
