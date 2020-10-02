import React from 'react';
import { Router, Link } from '@reach/router';

import Exercise01 from './exercises/Exercise01'
import Exercise02 from './exercises/Exercise02'
import Exercise03 from './exercises/Exercise03'

const Welcome = () => {

  return <div>
    <h2 style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: 40 }}>Welcome!</h2>
    <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: 25 }}>
      Please take a look at the 3 exercises, each of them contain instructions.
    </p>
  </div>
}


const NavLink = props => {
  return (<Link {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "nav-link active" : "nav-link"
      }
    }} />)
};

const App = () => {

  return <div className="container">
    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="py-4" style={{ color: 'white', backgroundColor: 'black', borderRadius: 10, textAlign: 'center' }}>FrontEnd Interview Exercises</h1></Link>
    <ul className="nav nav-tabs" style={{ justifyContent: 'center' }}>
      <li className="nav-item" style={{ backgroundColor: '#c4c4c4' }}>
        <NavLink to="/exercise01" style={{ color: 'black' }}>
          Exercise 01</NavLink>
      </li>
      <li className="nav-item" style={{ backgroundColor: '#c4c4c4' }}>
        <NavLink to="/exercise02" style={{ color: 'black' }}>
          Exercise 02</NavLink>
      </li>
      <li className="nav-item" style={{ backgroundColor: '#c4c4c4' }}>
        <NavLink to="/exercise03" style={{ color: 'black' }}>
          Exercise 03</NavLink>
      </li>
    </ul>

    <Router className="mt-5 mb-5">
      <Welcome path="/" default />
      <Exercise01 path="/exercise01" />
      <Exercise02 path="/exercise02" />
      <Exercise03 path="/exercise03" />
    </Router>

  </div>
}

export default App;
