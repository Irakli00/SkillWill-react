export function Book({ img, title, desc, characters, onClick }) {
  return (
    <article>
      <h1>title</h1>
      <img src={img} alt={title} />
      <p>{desc}</p>
      <ul>
        {characters.map((char) => (
          <li key={char}>{char}</li>
        ))}
      </ul>
      <button onClick={() => onClick(title)}>Title btn</button>
    </article>
  );
}
