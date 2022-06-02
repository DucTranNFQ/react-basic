import React from "react";
import {Routes, Route, Link, Outlet, useParams} from "react-router-dom";

  
export default function App() {
    return (
    <div>
        <Sidebar>
          <Routes>
            <Route path="/" element={<MainNav />} />
                <Route path="dashboard/*" element={<DashboardNav />} />
          </Routes>
        </Sidebar>
        <hr />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="support" element={<Support />} />
            </Route>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="invoices" element={<Invoices />} />
              <Route path="team" element={<Team />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
      </div>
    );
  }

  function Home() {
    return <h1>Home</h1>;
  }
  
  function DashboardNav() {
    return <h1>DashboardNav</h1>
  }
  
  function MainContent({children}) {
      return <>
        <h1>main content</h1>
        {children}
      </>
  }
  
  function Sidebar({ children }) {
    return (
      <>
        <h1>Sidebar</h1>
        {children}
      </>
    )
  }
  
  function MainNav() {
    return <h1>
      main nav
    </h1>
  }
  
  function Support() {
    return (
      <div>support</div>
    )
  }
  
  function About() {
    return (
      <div>about</div>
    )
  }
  
  function NotFound() {
    return (
      <div>not found</div>
    )
  }
  
  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="invoices">Invoices</Link>{" "}
          <Link to="team">Team</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }
  
  function Invoices() {
    return <h1>Invoices</h1>;
  }
  
  function Team() {
    return <h1>Team</h1>;
  }