import styled from 'styled-components';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';
import { useChangeTheme } from '../app-theme-context';

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--baseline);

  > * {
    flex: 1 1 140px;
  }
`;

export function Home() {
  const changeTheme = useChangeTheme();

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
      <Actions>
        <Button onClick={() => changeTheme('default')}>default</Button>
        <Button onClick={() => changeTheme('darkTheme')}>dark</Button>
        <Button onClick={() => changeTheme('forestTheme')}>forest</Button>
      </Actions>
    </main>
  );
}
