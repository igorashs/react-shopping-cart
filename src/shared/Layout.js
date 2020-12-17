import styled from 'styled-components';

const StyledContainer = styled.div`
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
    width: auto;
    margin: 0 1rem;
  }
`;

export function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
