import styled from 'styled-components';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';

const ThemeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--baseline);

  > * {
    flex: 1 1 140px;
  }
`;

export function Home({ onThemeChange }) {
  return (
    <main>
      <h1>Get that Item!</h1>
      <h2>
        Goo and add something to your Cart! <br />
        <Link to='/shop'> &gt; Shop</Link>
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem... well enough go shop now!
      </p>
      <h2>Themes</h2>
      <ThemeContainer>
        <Button onClick={() => onThemeChange('default')}>default</Button>
        <Button onClick={() => onThemeChange('darkTheme')}>dark</Button>
        <Button onClick={() => onThemeChange('forestTheme')}>forest</Button>
      </ThemeContainer>
    </main>
  );
}
