import React from "react";
import Home from "./Components/Home/Index";
import Detail from "./Components/RoutingPages/DetailPage/Details";
import List1 from "./Components/RoutingPages/ListingPages/List1";
// import List2 from "./Components/RoutingPages/ListingPages/List2";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home}></Route>
          <Route exact path="/details" component={Detail}></Route>
          <Route exact path="/list" component={List1}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
