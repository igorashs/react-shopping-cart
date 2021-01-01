import styled from 'styled-components';
import { Header } from './Header';

const Container = styled.div`
  /* mobile first */
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 540px;
    max-width: 540px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 720px;
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 960px;
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 1140px;
    max-width: 1140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: calc(var(--baseline) * 3);
  display: flex;
  align-items: center;
  background-color: var(--primary);
  box-shadow: 0px 1px 1px var(--body-color);
  z-index: 4096;
`;

const MainWrapper = styled.div`
  margin: calc(var(--baseline) * 4) 0;
`;

export function Layout({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>

      <MainWrapper>
        <Container>
          <main>{children}</main>
        </Container>
      </MainWrapper>
    </>
  );
}
