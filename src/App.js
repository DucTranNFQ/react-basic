import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';

import GlobalStyle from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <GlobalStyle>
      <div className="formBackground">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
