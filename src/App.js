import React, { useContext } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';

import GlobalStyle from "./GlobalStyles";
import { GlobalDataProvider } from "./contexts/GlobalProvider";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";



function App() {

  return (
    <GlobalDataProvider>
      <GlobalStyle>
        <div className="formBackground">
            <Routes>
              {/* <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} /> */}
              <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
            </Routes>

        </div>
      </GlobalStyle>
    </GlobalDataProvider>
  );
}

export default App;
