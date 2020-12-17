export function Home({ onThemeSwap }) {
  return (
    <>
      <h1>Home Page!</h1>
      <h2>Goo shopping!</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged{' '}
        <a href='#'>Here</a>. It was popularised in the 1960s with the release
        of Letraset sheets containing
      </p>

      <button onClick={onThemeSwap}>swap theme</button>
    </>
  );
}
