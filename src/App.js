import React from "react";
import Home from "./Components/Home/Index";
import Detail from "./Components/RoutingPages/DetailPage/Details";
import List1 from "./Components/RoutingPages/ListingPages/List1";
import Login from "./Components/RoutingPages/Login";
// import List2 from "./Components/RoutingPages/ListingPages/List2";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  const { history } = props;
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home}></Route>
          <Route exact path="/details" component={Detail}></Route>
          <Route exact path="/list" component={List1}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
