import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="/auth">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/auth">Authencate <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/events">Events</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/bookings">Bookings</NavLink>
      </li>
    </ul>
  </div>
</nav>
);

export default Navbar;