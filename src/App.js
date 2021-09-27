import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import "./App.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/search-results/:searchText"
              component={SearchResults}
              exact
            />
            <Route path="/messages" component={Messages} exact />
            <Route path="/profile" component={Profile} exact />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
