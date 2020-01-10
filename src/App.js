import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from "./containers/Auth";
import Register from "./containers/Register";


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
      </Switch>
    </Router>
  );
}

export default App;
