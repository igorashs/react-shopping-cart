import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  color: var(--text-primary);
`;

export function Svg({ href, id, viewBox = '0 0 16 16', title = '' }) {
  return (
    <StyledSvg viewBox={viewBox}>
      <title>{title}</title>
      <use xlinkHref={`${href}#${id}`}></use>
    </StyledSvg>
  );
}
