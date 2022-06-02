import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import 'antd/dist/antd.css';

import {LoginPage, SignupPage} from "./pages/authPage";
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<div className="formBackground"><Outlet /></div>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="settings" element={<Settings />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}


export default App;