# Cadeira

## About the project

Cadeira is an online e-commerce app for a furniture store.

### Main dependencies

- [Next.js](https://nextjs.org/blog/next-13/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)

### Main dev dependencies

- [ESLint](https://eslint.org/)
- [Husky](https://www.npmjs.com/package/husky)
- [Lint-staged](https://www.npmjs.com/package/lint-staged)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stylelint](https://stylelint.io/)
- [Web Vitals](https://web.dev/vitals/)

## Getting Started

```bash
# Installation
$ yarn install

# Production
$ yarn build
$ yarn start

# Development
$ yarn dev

```

## File structure

```text
|-- src
  |-- app
    |-- layout.tsx
    |-- page.tsx
  |-- assets
    |-- fonts
    |-- icons
    |-- images
  |-- components
    |-- Component
      |-- Component.tsx
      |-- Component.module.scss
      |-- index.ts
    |-- index.ts
  <!-- |-- configs -->
  |-- hooks
  <!-- |-- services -->
  |-- uikit
    |-- Component
    |-- index.ts
  |-- utils
    |-- constants
    |-- helpers
|-- styles
```

## Folders and Their Functions

`./app`

The app folder contains new pages that are mapped in routes and includes all the containers needed to implement a functionality.

`./assets`

This folder contains all the project assets that will be used by the application, such as images, fonts, mocks, and more.

`./components`

The components folder contains presentational-only elements that group UI items.

<!-- `./configs`

The configs directory houses our application's global settings files. -->

`./hooks`

The hooks folder contains functions that allow you to "plug in" to React's state and lifecycle features from functional components.

<!-- `./services`

This directory contains all the files responsible for consuming external services, such as the Axios configuration file for consuming RESTful APIs. -->

`./uikit`

The uikit folder is used for UI kit components.

`./utils`

In the utils folder, you'll find project constants and reusable functions.

`../styles`

This folder contains all the project global styles

## TODO

- [ ] Transition between pages
- [ ] Skeleton Loading Components ([link](https://www.youtube.com/watch?v=cNQTg920Nx0))
