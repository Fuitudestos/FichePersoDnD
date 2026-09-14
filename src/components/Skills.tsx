import type { Character } from "../data/destos";
import { Section } from "./Section";

const abilityShort: Record<string, string> = {
  Force: "FOR",
  "Dextérité": "DEX",
  Constitution: "CON",
  Intelligence: "INT",
  Sagesse: "SAG",
  Charisme: "CHA"
};

function formatModifier(value: number) {
  return value >= 0 ? `+${value}` : `${value}`;
}

export function Skills({ character }: { character: Character }) {
  return (
    <Section title="Compétences" icon="♜">
      <div className="skills-grid">
        {character.skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <span
              className={`skill-dot${skill.proficient ? " skill-dot-filled" : ""}`}
            />
            <span className="skill-name">{skill.name}</span>
            <span className="skill-ability">{abilityShort[skill.ability]}</span>
            <span className="skill-value">{formatModifier(skill.modifier)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
