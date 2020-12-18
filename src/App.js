import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalTheme, defaultTheme, darkTheme } from './GlobalTheme';
import { Header } from './shared/Header';
import { Container } from './shared/Layout';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeSwap = () => {
    setTheme((prevTheme) =>
      prevTheme === defaultTheme ? darkTheme : defaultTheme
    );
  };

  return (
    <GlobalTheme theme={theme}>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home onThemeSwap={handleThemeSwap} />
            </Route>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </Container>
      </Router>
    </GlobalTheme>
  );
}

export default App;
