import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import 'antd/dist/antd.css';

import {LoginPage, SignupPage} from "./pages/authPage";

function App() {

  return (

    <Routes>
      <Route path="auth" element={<div className="formBackground"><Outlet /></div>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;