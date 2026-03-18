# NestJS Interview Starter (SQLite)

Minimal NestJS starter project for interview exercises, with a working SQLite database integration.

## Tech Stack

- NestJS 11
- TypeORM
- SQLite (`sqlite3` driver)
- Jest + Supertest

## Prerequisites

- Node.js `>=20`
- npm `>=10`

## Getting Started

```bash
npm ci
npm run start:dev
```

The API starts on `http://localhost:3000`.

## Available Endpoints

- `GET /` - returns `Hello World!`
- `GET /db-check` - writes a timestamp to SQLite and reads it back

Example response from `GET /db-check`:

```json
{
  "ok": true,
  "value": "2026-03-18T15:24:12.402Z"
}
```

## Database Notes

- Database file: `database.sqlite`
- ORM config is in `src/app.module.ts`
- `synchronize: true` is enabled for fast local iteration (good for interview/dev use, not production)

## Scripts

- `npm run start:dev` - run in watch mode
- `npm run build` - compile to `dist/`
- `npm run start:prod` - run compiled app
- `npm run test` - unit tests
- `npm run test:e2e` - e2e tests
- `npm run lint` - lint/fix TypeScript files

## Project Layout

- `src/app.*` - basic hello-world route
- `src/database/app-setting.entity.ts` - example TypeORM entity
- `src/database/db-check.service.ts` - SQLite write/read health check
- `src/database/db-check.controller.ts` - route exposing DB check
- `test/app.e2e-spec.ts` - e2e coverage for `/` and `/db-check`

## Why this setup

This repository is intentionally small so you can quickly implement interview requirements while still having:

- a real HTTP API
- a real relational DB
- tests already in place
