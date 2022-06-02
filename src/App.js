import React, {useContext} from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import 'antd/dist/antd.css';

import { Layout } from 'antd';

import {LoginPage, SignupPage} from "./pages/authPage";
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import {GlobalDataContext} from "./contexts/GlobalProvider"

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const globalData = useContext(GlobalDataContext);
  const {userData} = globalData;
  console.log(userData)
  return (
    <>
    <Routes>
      
      <Route element={
         <Layout>
         <Header>
           <Link to="dashboard">dashboard</Link>
           <Link to="settings">settings</Link>
         </Header>
         <Layout>
           <Content><Outlet /></Content>
         </Layout>
         <Footer>footer</Footer>
       </Layout>
      }>

        <Route path="/" element={<HomePage />} />
        <Route path="settings" element={<Settings />} /> // if userData.role === 'admin' : navigate pagenotfound
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route element={<div className="formBackground"><Outlet /></div>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
    </>
  );
}


export default App;