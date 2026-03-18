# Express + TypeScript Interview Starter

A small API starter built with `Express`, `TypeScript`, and `sqlite3`.
It is designed to be easy to run locally and in StackBlitz-style environments.

## What this project does

- Starts an Express server
- Persists messages to a local SQLite database (`data.db`)
- Exposes two API endpoints:
  - `GET /` returns a hello message and stored messages
  - `POST /messages` inserts a new message

## Tech stack

- Node.js
- Express
- TypeScript
- sqlite3
- Jest + Supertest (e2e test)

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the app

```bash
npm start
```

Default URL: `http://localhost:3000`

## API quick reference

### `GET /`

Returns:

```json
{
  "message": "Hello world",
  "messages": []
}
```

### `POST /messages`

Request body:

```json
{
  "message": "Hello from curl"
}
```

Success response (`201`):

```json
{
  "id": 1,
  "message": "Hello from curl",
  "created_at": "2026-03-18 10:30:00"
}
```

Validation error (`400`):

```json
{
  "error": "Message is required"
}
```

## Useful curl commands

Insert a record:

```bash
curl -X POST "http://localhost:3000/messages" \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello from curl"}'
```

Read current messages:

```bash
curl "http://localhost:3000/"
```

## Scripts

- `npm start` - run in watch mode with `tsx`
- `npm run build` - compile TypeScript to `dist`
- `npm test` - run Jest unit tests (if present under `src`)
- `npm run test:e2e` - run e2e tests from `test`
- `npm run test:cov` - run tests with coverage

## Project structure

```text
src/
  app.ts                # express app and routes
  main.ts               # server bootstrap
  app.controller.ts     # request handlers
  database.service.ts   # sqlite access layer
test/
  app.e2e-spec.ts       # e2e coverage for API behavior
```

## Notes for StackBlitz/WebContainers

This project uses `sqlite3` instead of `better-sqlite3` to avoid common native binding issues in browser-based Node runtimes.

## License

Private interview starter. Update as needed for your team or candidate instructions.
