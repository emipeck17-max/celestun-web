# Celestún — Sitio Turístico

Sitio web informativo sobre la Reserva de la Biósfera de Celestún, Yucatán. Construido con React, TypeScript, Vite y Tailwind CSS v4.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (configuración CSS-first via `@theme {}`)
- React Router v6 (hash routing para GitHub Pages)

## Desarrollo local

```bash
npm install
npm run dev       # servidor en http://localhost:5173
npm run build     # build de producción
npm run preview   # previsualizar el build
```

## Deploy en GitHub Pages

El código fuente vive en la rama `main`. GitHub Actions construye el proyecto y publica los archivos compilados en la rama `gh-pages`, que es la que sirve GitHub Pages.

### Primera vez

```bash
# 1. Commit de todos los cambios
git add .
git commit -m "feat: initial commit"

# 2. Push a main
git push origin master:main --force
```

### Deploys posteriores

```bash
git add .
git commit -m "tu mensaje"
git push origin master:main
```

El workflow se dispara con cada push a `main`, construye el proyecto y sobreescribe `gh-pages` con los archivos del build.

**URL del sitio:** `https://emipeck17-max.github.io/celestun-web/`
