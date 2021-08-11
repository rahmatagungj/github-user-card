import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./contexts/userContext";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:username" component={UserDetails} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
