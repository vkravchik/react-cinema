import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from "./containers/Auth";
import Register from "./containers/Register";
import Film from "./containers/Film";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Auth/>
        </Route>

        <Route path='/registration'>
          <Register/>
        </Route>
        <Route path='/dashboard'>
          <Film/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
