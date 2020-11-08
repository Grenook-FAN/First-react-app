import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import { Home, News, Login, Profile, PageNotFound } from './pages'

function App() {
  return (
    <div>
      <div className='wrapper'>
        <Header/>
      </div>
      
      <div className='wrapper'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/news' component={News} exact />
          <Route path='/profile' component={Profile} exact />
          <Route component={PageNotFound}/>
        </Switch>
      
      
      </div>
      

    </div>
  )
}

export default App
