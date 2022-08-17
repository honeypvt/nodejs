import React from 'react';
import Login from './components/login';
// import Update from './components/update';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        
        <Route path="/login"><Login /></Route>
        {/* <Route path="/update/:id"><Update /></Route> */}
        <Route path="/"><Home /></Route> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
