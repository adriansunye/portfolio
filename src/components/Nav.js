import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <span class="navbar-brand mb-0 h1">adriansunye</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <Link to ="/">
        <li class="nav-item active">
          <a class="nav-link">Portfolio</a>
        </li>
        </Link>
        <Link to ="/contact">
        <li class="nav-item">
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Contact</button>
        </li>
        </Link>
      </ul>
    </div>
  </nav> 
  );
}

export default Nav;