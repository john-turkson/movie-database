import React from "react";

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login"
import Detail from "../pages/Detail/Detail"
import Signup from "../pages/Signup/Signup"

const PageRoutes = () => {
  return (
    <Switch>
      <Route path='/:category/:id' component={Detail} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default PageRoutes