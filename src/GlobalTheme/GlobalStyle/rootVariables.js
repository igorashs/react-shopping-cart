import { css } from 'styled-components';

export const rootVariables = css`
  :root {
    /* colors */
    --primary: ${({ theme }) => theme.primary};
    --secondary: ${({ theme }) => theme.secondary};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-secondary: ${({ theme }) => theme.textSecondary};

    /* typography */
    --body-font-family: ${({ theme }) => theme.bodyFontFamily};
    --headers-font-family: ${({ theme }) => theme.headersFontFamily};
    --body-text: ${({ theme }) => theme.bodyText};
    --body-font-weight: ${({ theme }) => theme.fontWeight};
    --body-line-height: ${({ theme }) => theme.bodyLineHeight};
    --headers-line-height: ${({ theme }) => theme.headersLineHeight};
    --headers-font-weight: ${({ theme }) => theme.headersFontWeight};
    --baseline: calc(var(--body-text) * var(--body-line-height));
    --textScale: ${({ theme }) => theme.textScale};
  }
`;
