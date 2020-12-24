import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../Layout';
import { CartWidget } from './CartWidget';

const HeaderWrapper = styled.div`
  width: 100%;
  height: calc(var(--baseline) * 3);
  display: flex;
  align-items: center;
  background-color: var(--primary);
`;

const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--baseline);
  align-items: center;
`;

const LinkItem = styled.li`
  a {
    text-decoration: none;
    color: var(--text-primary);
  }
`;

const LinkCartItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  a {
    display: block;
    color: var(--text-primary);
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <header>
          <nav>
            <LinksList>
              <LinkItem>
                <Link to='/'>Home</Link>
              </LinkItem>
              <LinkItem>
                <Link to='/shop'>Shop</Link>
              </LinkItem>
              <LinkCartItem>
                <Link to='/cart'>
                  <CartWidget />
                </Link>
              </LinkCartItem>
            </LinksList>
          </nav>
        </header>
      </Container>
    </HeaderWrapper>
  );
}
