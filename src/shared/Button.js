import styled, { css } from 'styled-components';

const smallBtn = css`
  padding: calc(var(--baseline) / 4);
`;

export const Button = styled.button`
  padding: calc(var(--baseline) / 2);
  border: 0;
  border-radius: 4px;
  color: var(--text-secondary);
  background-color: var(--secondary-dark);
  box-shadow: 1px 1px 2px var(--body-color);

  :hover {
    background-color: var(--secondary);
  }

  ${({ small }) => small && smallBtn}
`;
