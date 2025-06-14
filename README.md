# AquaHeroDemo

AquaHeroDemo es una aplicación gamificada diseñada para promover la conservación del agua motivando a los usuarios a reducir su consumo diario. Este proyecto es una demo que muestra las características principales de AquaHero, convirtiendo prácticas sostenibles en un juego.

## 🏗️ Estructura del Proyecto

El proyecto está organizado como un monorepo con dos paquetes principales gestionados como workspaces de npm:

- **src/backend**: Servidor backend (Express, TypeScript)
- **src/frontend**: Aplicación frontend (Angular)

## 🚀 Puesta en marcha rápida

### 1. Clona el repositorio

```bash
git clone https://github.com/FerranPetit97/AquaHeroDemo.git
cd AquaHeroDemo
```

### 2. Instala las dependencias

La instalación de dependencias se gestiona desde la raíz, gracias a los workspaces de npm:

```bash
npm install
```

Esto instalará las dependencias para ambos paquetes (`backend` y `frontend`).

### 3. Levanta la aplicación

Para levantar tanto el backend como el frontend en modo desarrollo:

```bash
npm run start:all
```

Este comando ejecuta ambos servicios en paralelo usando `concurrently`:
- Backend: Express (API REST)
- Frontend: Angular (servido en http://localhost:4200/ por defecto)

### 4. Scripts útiles

- `npm run start:all` — Arranca backend y frontend en modo desarrollo.
- `npm run dev` — Alternativa para desarrollo (hot reload).
- `npm run build:all` — Compila ambos paquetes.
- `npm run test` — Ejecuta los tests del backend.

Puedes consultar más scripts en el archivo `package.json`.

## 📦 Detalles técnicos

### Backend (`src/backend`)
- Node.js + Express + TypeScript
- Scripts principales: `start`, `dev`, `build`
- Dependencias: express, cors, dotenv, swagger-ui-express, jest (tests)
- Configuración en `src/backend/package.json`

### Frontend (`src/frontend`)
- Angular 19
- Scripts principales: `start`, `build`, `test`
- Dependencias: Angular, maplibre-gl, express (SSR)
- Configuración en `src/frontend/package.json`

## 🧪 Testing

- Backend: `npm run test` desde la raíz o desde `src/backend`
- Frontend: `npm run test` desde `src/frontend`

## 📄 Notas

- Si necesitas variables de entorno, consulta los archivos `.env` si existen o solicita instrucciones adicionales.
- Puedes construir para producción ejecutando `npm run build:prod` y arrancar el backend con `npm run start:prod`.

---

¿Quieres agregar detalles como endpoints del backend, ejemplos de uso, o capturas de pantalla? ¡Dímelo y lo completo por ti!
