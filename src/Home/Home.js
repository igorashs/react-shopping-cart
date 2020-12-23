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
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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
