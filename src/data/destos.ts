export type StatKey =
  | "Force"
  | "Dextérité"
  | "Constitution"
  | "Intelligence"
  | "Sagesse"
  | "Charisme";

export interface Character {
  name: string;
  className: string;
  level: number;
  race: string;
  alignment: string;
  background: string;
  deity: string;
  armorClass: string;
  hitPoints: string;
  speed: string;
  stats: Record<StatKey, { score: number; modifier: number }>;
  spells: {
    cantrips: string[];
    level1: string[];
  };
  traits: string;
  ideal: string;
  weakness: string;
  abilities: string[];
}

export const destos: Character = {
  name: "Destos Delaunay",
  className: "Clerc",
  level: 1,
  race: "Humain",
  alignment: "Neutral Bon",
  background: "Prêtre",
  deity: "La Lumière",

  armorClass: "15",
  hitPoints: "10 (1d8 + 2 Constitution)",
  speed: "9m",

  stats: {
    Force: { score: 10, modifier: 0 },
    "Dextérité": { score: 7, modifier: -2 },
    Constitution: { score: 15, modifier: 2 },
    Intelligence: { score: 12, modifier: +1 },
    Sagesse: { score: 17, modifier: 3 },
    Charisme: { score: 10, modifier: 0 }
  },

  spells: {
    cantrips: [
      "Flamme sacrée",
      "Assistance",
      "Mot de Radiance",
      "Stabilisation",
      "Lumière",
      "Thaumaturgie"
    ],
    level1: [
      "Bénédiction",
      "Création ou destruction d'eau",
      "Détection de la magie",
      "Purification de la nourriture et de l'eau",
      "Mot de guérison",
    ],
  },

  traits:
    "Calme, posé, conscient de ses faiblesses, attachant, s’attache vite aux gens",
  ideal: "Tout le monde doit connaitre le toucher de la Lumière",
  weakness: "Maladroit",

  abilities: [
      "Prêtre : +1 à l'Intelligence, la Sagesse, et au Charisme.",
    "Compétences améliorées : Perspicacité et Religion (+2).",
    "Initié à la Magie : +2 sorts mineurs supplémentaires et 1 sort de niveau 1 supplémentaire utilisable 1/jour.",
    "Sorts d'initié : Lumière, Thaumaturgie, Mot de guérison.",
    "Don d'humain : Guérisseur.",
    "Thaumaturge : +1 sort mineurs supplémentaires.",
    "Vous pouvez ajouter votre modificateur de Sagesse à vos jets de compétences basés sur l'Intelligence, spécifiquement en Arcanes et en Religion.",

  ]
};
