import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalTheme, createTheme } from './GlobalTheme';
import { Header } from './shared/Header';
import { Container } from './shared/Layout';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';

const defaultTheme = createTheme();

const darkTheme = createTheme({
  textPrimary: '#fff',
  textSecondary: '#fff',
  primary: '#2f3594',
  secondary: '#626594',
  bodyBg: '#282828'
});

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
