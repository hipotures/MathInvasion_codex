# Math Invasion (Prototype)

This is a prototype implementation of a tower defense game based on the requirements in `TD-PLAN-g2.5adv.md`. The code uses vanilla JavaScript and HTML5 canvas.

## Setup

Install dependencies (for local development a simple HTTP server is used):

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Open the printed URL in your browser. You can set difficulty via the `difficulty` URL parameter, e.g. `?difficulty=hard`.

## Structure

- `public/index.html` – basic HTML page with canvas and UI elements.
- `src/` – source modules for systems, entities and utilities.
- `TD-PLAN-g2.5adv.md` – design document describing desired behaviour.

## Status

This implementation only provides a minimal skeleton: core loops, base systems and placeholder entities. Full gameplay according to the design can be implemented by expanding on these modules.
