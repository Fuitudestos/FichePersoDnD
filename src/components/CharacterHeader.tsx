import type { Character } from "../data/destos";

export function CharacterHeader({ character }: { character: Character }) {
  return (
    <header className="character-header">
      <div className="name-card">
        <div className="sun-mark">☀</div>
        <h1>{character.name}</h1>
        <p>
          {character.className} – Niveau {character.level}
        </p>
      </div>
    </header>
  );
}
