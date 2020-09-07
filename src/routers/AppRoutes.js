import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { LoginPage } from '../components/pages/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" component={DashboardRoutes} />
      </Switch>
    </Router>
  )
}
