import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './components/signin';
import Mainpage from './components/main';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path = "/" >
        <Signin/>
      </Route>
      <Route exact path = "/Mainpage">
        <Mainpage/>
      </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;

