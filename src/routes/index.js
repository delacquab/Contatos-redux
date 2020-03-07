import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import Create from "../pages/Create";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/404" render={NotFound}></Route>
      <Route exact path="/create" component={Create}></Route>
      <Route exact path="/:contato_id/edit" component={Edit}></Route>

      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
