import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from '../../pages/HomeView/HomeView';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
