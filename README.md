# Destos Delaunay – Fiche React

Projet React + TypeScript + Vite pour afficher une fiche de personnage fantasy et l'exporter en PNG.

## Installation

```bash
npm install
npx playwright install chromium
```

## Lancer le projet

```bash
npm run dev
```

## Exporter en PNG

```bash
npm run export:png
```

Le PNG sera généré ici :

```text
dist/destos-delaunay.png
```

## Modifier le personnage

Toutes les données du personnage sont dans :

```text
src/data/destos.ts
```

Tu peux modifier :

- le nom
- la classe
- le niveau
- les statistiques
- les sorts
- les traits
- les capacités

## Modifier le design

Le CSS principal est ici :

```text
src/styles.css
```

## Modifier les composants

```text
src/components/
```

- `CharacterHeader.tsx`
- `Section.tsx`
- `Stats.tsx`
- `Spells.tsx`

## Images

L'image principale est dans :

```text
src/assets/Destos_Delaunay.png
```

Tu peux remplacer cette image par une autre image de personnage en gardant le même nom, ou modifier l'import dans `src/App.tsx`.
