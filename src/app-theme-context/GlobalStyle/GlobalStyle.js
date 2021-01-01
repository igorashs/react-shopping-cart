import { createGlobalStyle } from 'styled-components';
import { rootVariables } from './rootVariables';
import { reset } from './reset';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${rootVariables}
  ${reset}
  ${typography}

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--body-bg);
  }

  :focus {
    outline: dashed 2px var(--body-color);
    outline-offset: 3px;
  }
`;
