import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import History from './components/History';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div className="App" style={{ background: 'blue', height: '300px' }}>
        <BrowserRouter>

          <div>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/history" component={History} />
            </Switch>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/notre-histoire"><button>History</button></NavLink>
            </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
