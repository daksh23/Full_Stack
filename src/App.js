import React from "react";
import './app.css';
import Home from './Components/Home';
import List from './Components/List';
import Header from './Components/Header';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/list' component={List}/>
            <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
