import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

// import SignUp from "./pages/Signup";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import UserProfile from "./pages/Profile";
// import UpdateProfile from "./pages/UpdateProfile";
// import SearchResults from "./pages/SearchResults";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            {/* User Routes */}
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            {/* <Route path="/signup" component={SignUp} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/profile" component={UserProfile} exact />
            <Route path="/profile-update" component={UpdateProfile} exact />
            <Route
              path="/search-results/:title"
              component={SearchResults}
              exact
            /> */}
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
