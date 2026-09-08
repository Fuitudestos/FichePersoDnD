import type { Character, StatKey } from "../data/destos";
import { Section } from "./Section";

const statIcons: Record<StatKey, string> = {
  Force: "✊",
  "Dextérité": "➹",
  Constitution: "♥",
  Intelligence: "♜",
  Sagesse: "◉",
  Charisme: "✦"
};

function formatModifier(value: number) {
  return value >= 0 ? `+${value}` : `${value}`;
}

export function Stats({ character }: { character: Character }) {
  return (
    <Section title="Caractéristiques" icon="☀">
      <div className="stats-grid">
        {(Object.entries(character.stats) as [StatKey, { score: number; modifier: number }][]).map(
          ([name, stat]) => (
            <div className="stat-row" key={name}>
              <span className="stat-icon">{statIcons[name]}</span>
              <span className="stat-name">{name}</span>
              <span className="stat-value">
                {stat.score} ({formatModifier(stat.modifier)})
              </span>
            </div>
          )
        )}
      </div>
    </Section>
  );
}
