// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash'; // Splash 컴포넌트를 불러옵니다.
import Page1 from './pages/Page1';



function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Splash} />
        <Route path="/page1" component={Page1} />
 

      </Switch>
    </Router>
  
  );
}

export default App;
