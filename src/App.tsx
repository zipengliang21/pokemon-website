import React from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Test = styled.span`
  position: fixed;
  left: 300px;
  top: 0;
`;

function App() {
  return (
      <Switch>
         <Route exact path="/">
            <NavBar />
            <Test>Home</Test>
         </Route>
         <Route exact path="/profile">
            <NavBar />
            <Test>Profile</Test>
         </Route>
         <Route exact path="/filterSearch">
            <NavBar />
            <Test>Filter Search</Test>
         </Route>
         <Route exact path="/pokemonComments">
            <NavBar />
            <Test>Pokemon Comments</Test>
         </Route>
      </Switch>

  );
}

export default App;
