import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './components/home/Home';
import OrderPage from './components/order/OrderPage';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home cart={cart} />
        </Route>
        <Route path="/pizza">
          <OrderPage cart={cart} setCart={setCart} />
        </Route>
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
