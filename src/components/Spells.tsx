import type { Character } from "../data/destos";
import { Section } from "./Section";

export function Spells({ character }: { character: Character }) {
  return (
    <Section title="Sorts" icon="✧">
      <div className="spell-block">
        <strong>Sorts préparés</strong>
        <p><b>Niveau 0 :</b> {character.spells.cantrips.join(", ")}</p>
        <p><b>Niveau 1 :</b> {character.spells.level1.join(", ")}</p>
      </div>
    </Section>
  );
}
