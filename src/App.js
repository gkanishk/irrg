import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {nutrition as Nutri} from "./pages/nutrition";
import {recipie as Recipie} from "./pages/recipie";
import Start from "./pages/Start";
import styled from "styled-components";

const Navbar=styled.nav`
background: grey;
color: white
`
function App() {
  
  return (
  <Router>
    <div>
      <Navbar>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Link to="/"><a>home&nbsp;&nbsp;</a></Link>
      <Link to="/start">Start&nbsp;&nbsp;</Link>
      <Link to="/nutrition">nutri&nbsp;&nbsp;</Link>
      <Link to="/recipie">recipie</Link>
      </div>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route exact path="/start">
          <Start/>
        </Route>
        <Route path="/nutrition">
          <Nutri/>
        </Route>
        <Route path="/recipie">
          <Recipie/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
