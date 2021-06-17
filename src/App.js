import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Perfume from "./Perfume";
import Bags from "./Bags";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import AboutUs from "./AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/bags">
            <Header />
            <Bags />
          </Route>
          <Route path="/perfume">
            <Header />
            <Perfume />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/aboutus">
            <Header />
            <AboutUs />
          </Route>
          <Route path="/cloths">
            <Header />
            <AboutUs />
          </Route>{" "}
          <Route path="/footwear">
            <Header />
            <AboutUs />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
