export function Svg({ href, id, viewBox = '0 0 16 16', title = '' }) {
  return (
    <svg viewBox={viewBox}>
      <title>{title}</title>
      <use xlinkHref={`${href}#${id}`}></use>
    </svg>
  );
}
