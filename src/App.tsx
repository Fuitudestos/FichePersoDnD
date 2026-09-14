// @ts-nocheck

import { destos } from "./data/destos";
import { CharacterHeader } from "./components/CharacterHeader";
import { Section } from "./components/Section";
import { Stats } from "./components/Stats";
import { Spells } from "./components/Spells";
import { Skills } from "./components/Skills";

import characterArt from "./assets/Destos_Delaunay.png";
import portraitArt from "./assets/destos-portrait.png";
import robeDetailArt from "./assets/destos-robe-detail.png";
import bookArt from "./assets/destos-book.png";
import medallionArt from "./assets/destos-medallion.png";

function App() {
  const c = destos;

  return (
    <main className="page">
      <article id="character-sheet" className="character-sheet">
        <div className="sheet-grid">
          <aside className="left-column">
            <CharacterHeader character={c} />

            <Section title="Informations de Base" icon="☀">
              <dl className="info-list">
                <div><dt>Race</dt><dd>{c.race}</dd></div>
                <div><dt>Alignement</dt><dd>{c.alignment}</dd></div>
                <div><dt>Background</dt><dd>{c.background}</dd></div>
                <div><dt>Divinité</dt><dd>{c.deity}</dd></div>
              </dl>
            </Section>

            <Stats character={c} />

            <Section title="Défense" icon="⬡">
              <dl className="info-list">
                <div><dt>CA</dt><dd>{c.armorClass}</dd></div>
                <div><dt>PDV</dt><dd>{c.hitPoints}</dd></div>
                <div><dt>Vitesse</dt><dd>{c.speed}</dd></div>
              </dl>
            </Section>

            <Spells character={c} />

            <Section title="Traits de Personnalité" icon="♙">
              <div className="paragraph-list">
                <p><b>Traits :</b> {c.traits}</p>
                <p><b>Idéal :</b> {c.ideal}</p>
                <p><b>Faiblesse :</b> {c.weakness}</p>
              </div>
            </Section>

            <Section title="Capacités Spéciales" icon="☀">
              <div className="paragraph-list">
                {c.abilities.map((ability, index) => (
                  <p key={index}>{ability}</p>
                ))}
              </div>
            </Section>

          </aside>

          <section className="right-column">
            <div className="quote">
              <span>☀</span>
              <p>« Tout le monde doit connaitre le toucher de la Lumière. »</p>
            </div>
            <div className="detail-grid">
              <div className="art-frame">
                <img
                    src={portraitArt}
                    alt="Portrait de Destos"
                    className="detail-image portrait"
                />
              </div>

              <div className="art-frame">
                <img
                    src={robeDetailArt}
                    alt="Détail de la robe de Destos"
                    className="detail-image robe"
                />
              </div>

              <div className="art-frame">
                <img
                    src={bookArt}
                    alt="Livre de Destos"
                    className="detail-image book"
                />
              </div>

              <div className="art-frame">
                <img
                    src={medallionArt}
                    alt="Médaillon de Destos"
                    className="detail-image medallion"
                />
              </div>
            </div>

            <Skills character={c} />

            <Section title="Équipement" icon="⚔">
              <ul className="equipment-list">
                {c.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Section>
          </section>
        </div>
      </article>
    </main>
  );
}

export default App;
