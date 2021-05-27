import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import HeroDetail from './Components/HeroDetail/HeroDetail'
import Login from './Components/Login/Login'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <>
      {auth ?
        <>
          <Route path='/' render={() => <Home setAuth={setAuth} />} />
          <Route path='/id/:id' component={HeroDetail} />
          <Redirect to='/' />
        </> :
        <>
          <Route exact path='/login' render={() => <Login auth={auth} setAuth={setAuth} />} />
          <Redirect to='/login' />
        </>
      }
    </>
  );
}

export default App;
