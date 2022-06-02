import React from "react";
import {Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import 'antd/dist/antd.css';

import {LoginPage, SignupPage} from "./pages/authPage";
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <Routes>
      <Route path="auth" element={<div className="formBackground"><Outlet /></div>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="settings" element={<Settings />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}


export default App;