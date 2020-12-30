import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppThemeProvider } from './app-theme-context';
import { CartProvider } from './cart-context';
import { ShopProvider } from './shop-context';
import { Header } from './shared/Header';
import { Wrapper, Container } from './shared/Layout';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { Checkout } from './Checkout';

function App() {
  return (
    <Router>
      <AppThemeProvider>
        <CartProvider>
          <ShopProvider>
            <Header />
            <Wrapper>
              <Container>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/shop'>
                    <Shop />
                  </Route>
                  <Route exact path='/cart'>
                    <Cart />
                  </Route>
                  <Route exact path='/checkout'>
                    <Checkout />
                  </Route>
                </Switch>
              </Container>
            </Wrapper>
          </ShopProvider>
        </CartProvider>
      </AppThemeProvider>
    </Router>
  );
}

export default App;
