import React, {useContext} from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import 'antd/dist/antd.css';

import {LoginPage, SignupPage} from "./pages/authPage";
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import PageNotFound from "./pages/pageNotFound"
import {GlobalDataContext} from "./contexts/GlobalProvider"
import MainLayout from "./layouts/MainLayout";

function App() {
  const globalData = useContext(GlobalDataContext);
  const {userData} = globalData;

  return (
    <>
	<Routes>
		<Route path="/" element={
			<MainLayout />
		}>
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="settings" element={<Settings />} />
		</Route>
		
		<Route element={<div className="formBackground"><Outlet /></div>}>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Route>
		<Route path="*" element={<PageNotFound />} />
	</Routes>
    </>
  );
}


export default App;