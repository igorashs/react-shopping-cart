import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../Layout';
import { Svg } from '../Svg';
import cartImg from './cart.svg';

const HeaderWrapper = styled.div`
  width: 100%;
  position: static;
  background-color: var(--secondary);
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
`;

const LinksList = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const LinkItem = styled.li`
  a {
    text-decoration: none;
    color: var(--text-primary);
  }
`;

const LinkCartItem = styled.li`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <Nav>
            <LinksList>
              <LinkItem>
                <Link to='/'>Home</Link>
              </LinkItem>
              <LinkItem>
                <Link to='/shop'>Shop</Link>
              </LinkItem>
              <LinkCartItem>
                <Link to='/cart'>
                  <Svg href={cartImg} id='cart' title='navigate to cart' />
                </Link>
              </LinkCartItem>
            </LinksList>
          </Nav>
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  );
}
