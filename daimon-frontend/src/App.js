import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './pages';
import Nav from './components/Nav';
import './style/App.scss';

const App = () => {


  return (
    <div className="app-container">
    <Nav/>
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/daimon/login" component={Pages.Login} />
        <Route exact path="/daimon/signup" component={Pages.Signup} />
        <Route exact path="/daimon/profile" component={Pages.Profile} />
        <Route exact path="/daimon/habits" component={Pages.Habits} />
        <Route exact path="/daimon/community" component={Pages.Community} />
      </Switch>
    </div>
  )
}

export default App;
