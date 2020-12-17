import { css } from 'styled-components';

export const typography = css`
  /* base font */
  html {
    font-size: var(--body-text);
  }

  body {
    font-family: var(--body-font-family);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
    color: var(--text-primary);
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    font-size: 1rem;
    text-transform: lowercase;
  }

  p {
    margin-bottom: var(--baseline);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: calc(var(--baseline) * 2) 0 var(--baseline);
    font-family: var(--headers-font-family);
    font-weight: var(--headers-font-weight);
    line-height: var(--headers-line-height);
    color: var(--text-secondary);
  }

  /* mobile first sizes */
  h1 {
    font-size: calc(var(--textScale) * 2rem);
  }

  h2 {
    font-size: calc(var(--textScale) * 1.5rem);
  }

  small {
    font-size: calc(var(--textScale) * 0.5rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: calc(var(--textScale) * 3rem);
    }

    h2 {
      font-size: calc(var(--textScale) * 2rem);
    }
  }
`;
