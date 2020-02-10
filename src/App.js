import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './bootstrap.min.css';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import Navbar from './components/Navigation/Navbar'

class App extends Component {
  render(){
    return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/bookings" component={BookingsPage} />
        </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
  }
}

export default App;
