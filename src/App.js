import React from 'react';
import LoginPage from './Components/LoginPage';
import Account from './Components/account';
import Profile from './Components/profile'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/account" exact>
              <Account />
            </Route>  
            <Route path="/profile" exact>  
               <Profile />
            </Route>   
          </Switch>
        </Router>
        </header>
    </div>
  );
}

export default App;
