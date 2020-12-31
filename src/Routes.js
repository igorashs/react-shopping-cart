import { Route, Switch } from 'react-router-dom';
import { AppThemeProvider } from './app-theme-context';
import { CartProvider } from './cart-context';
import { ShopProvider } from './shop-context';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { Layout } from './shared/Layout';

export function Routes() {
  return (
    <AppThemeProvider>
      <CartProvider>
        <ShopProvider>
          <Layout>
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
          </Layout>
        </ShopProvider>
      </CartProvider>
    </AppThemeProvider>
  );
}
