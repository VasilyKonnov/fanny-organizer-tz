import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import { ProfileState } from "./context/Profile/ProfileState";

function App() {
  return (
    <ProfileState>
      <BrowserRouter>
        <NavBar />
        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Tasks" component={Tasks} />
            <Route path="/Profile/:id" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </ProfileState>
  );
}

export default App;