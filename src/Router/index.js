import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../pages/Home/StartPage.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import ToDo from "../pages/ToDoPage/ToDo.jsx";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/categories" component={Categories} />
      <Route path='/toDo' component={ToDo} />
    </Switch>
  </Router>
);

export default AppRouter;
