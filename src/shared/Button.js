import styled, { css } from 'styled-components';

const smallBtn = css`
  padding: calc(var(--baseline) / 4);
`;

const StyledButton = styled.button`
  padding: calc(var(--baseline) / 2);
  border: 0;
  border-radius: 4px;
  color: var(--text-secondary);
  background-color: var(--secondary);
  box-shadow: 1px 1px 2px var(--text-primary);

  ${({ small }) => small && smallBtn}
`;

export function Button(props) {
  return <StyledButton {...props} />;
}
