import './App.css';
import Home from './Views/Home'
import Player from './Views/Player'
import Login from './Views/Login'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/app">
            <Player />
          </Route>

          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
