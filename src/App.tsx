import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import './sass/App.scss';

const App:React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/chat' exact component={Chat} />
    </Switch>
  );
}

export default App;
