import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalTheme, useTheme } from './GlobalTheme';
import { Header } from './shared/Header';
import { Container, Wrapper } from './shared/Layout';
import { CartProvider } from './cart-context';
import { ShopProvider } from './shop-context';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { Checkout } from './Checkout';

function App() {
  const [theme, changeTheme] = useTheme();

  return (
    <Router>
      <GlobalTheme theme={theme}>
        <CartProvider>
          <Header />
          <Wrapper>
            <Container>
              <ShopProvider>
                <Switch>
                  <Route exact path='/'>
                    <Home onThemeChange={changeTheme} />
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
              </ShopProvider>
            </Container>
          </Wrapper>
        </CartProvider>
      </GlobalTheme>
    </Router>
  );
}

export default App;
