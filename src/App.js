import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalTheme, useTheme } from './GlobalTheme';
import { Header } from './shared/Header';
import { Container, Wrapper } from './shared/Layout';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';

function App() {
  const [theme, changeTheme] = useTheme();

  return (
    <GlobalTheme theme={theme}>
      <Router>
        <Header />
        <Wrapper>
          <Container>
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
            </Switch>
          </Container>
        </Wrapper>
      </Router>
    </GlobalTheme>
  );
}

export default App;
