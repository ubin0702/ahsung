
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Login_franchise from './pages/Login_franchise';
import Login_manager from'./pages/Login_manager';



function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Splash} />
        <Route path="/Login_franchise" component={Login_franchise} />
        <Route path="/Login_manager" component={Login_manager} />
 

      </Switch>
    </Router>
  
  );
}

export default App;
