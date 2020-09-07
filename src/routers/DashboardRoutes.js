import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/shared/NavBar';
import { MarvelPage } from '../components/pages/marvel/MarvelPage';
import { HeroPage } from '../components/pages/heroes/HeroPage';
import { DcPage } from '../components/pages/dc/DcPage';
import { HomePage } from '../components/pages/home/HomePage';

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/marvel' exact component={MarvelPage} />
          <Route path='/dc' exact component={DcPage} />
          <Route path='/heoroe/:heroId' exact component={HeroPage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
      
  )
}
