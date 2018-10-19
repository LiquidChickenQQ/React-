import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from './FunctionalComponentDemo';
import JSXrules from '../concepts/JSXrules';
import ClassComponentDemo from '../concepts/ClassComponentNotes';
import PropsDemo from '../concepts/PropsDemo';
import ClockApp from '../walkthrough/Clock';
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import NytApp from '../apps/nyt-app/NytApp';


const Sidebar = () => (

    <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/FunctionalComponentDemo">Functional Component</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/ClassConponentDemo">Class Component Notes</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/clockapp">Clock</Link></li>
        <li><Link to="/LifeCycleCodepen">Life Cycle Codepen</Link></li>
        <li><Link to="/NytApp">New Your Times Search</Link></li>
      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/FunctionalComponentDemo"><FunctionalComponentDemo /></Route>
            <Route exact path="/jsxrules"><JSXrules /></Route>
            <Route exact path="/ClassConponentDemo"><ClassComponentDemo /></Route>
            <Route exact path="/propsdemo"><PropsDemo  /></Route>
            <Route exact path="/lifecyclecodepen"><LifeCycleCodepen /></Route>
        <Route exact path="/clockapp"><ClockApp /></Route>
        <Route exact path="/nytapp"><NytApp /></Route>
        </Switch>
    </div>
  </div>

)

export default Sidebar;