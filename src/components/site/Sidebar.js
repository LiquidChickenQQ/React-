import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from './FunctionalComponentsDemo';


const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalComponentsDemo">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
​
      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponentsdemo"><FunctionalComponentDemo /></Route>
        </Switch>
    </div>
  </div>

)

export default Sidebar;