import { createGlobalStyle } from 'styled-components';
import { rootVariables } from './rootVariables';
import { reset } from './reset';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${rootVariables}
  ${reset}
  ${typography}

  body {
    background-color: var(--primary);
  }
`;
