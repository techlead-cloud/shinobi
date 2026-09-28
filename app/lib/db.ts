import "server-only";
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "data", "app.db");

declare global {
  var __appDb: DatabaseSync | undefined;
}

function createDatabase(): DatabaseSync {
  mkdirSync(path.dirname(DB_PATH), { recursive: true });

  const database = new DatabaseSync(DB_PATH);
  database.exec("PRAGMA foreign_keys = ON");
  database.exec("PRAGMA journal_mode = WAL");

  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      display_name  TEXT NOT NULL,
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS comments (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      post_slug   TEXT NOT NULL,
      user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      body        TEXT NOT NULL,
      created_at  TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_comments_post_slug ON comments(post_slug);
  `);

  return database;
}

export const db = globalThis.__appDb ?? createDatabase();

if (process.env.NODE_ENV !== "production") {
  globalThis.__appDb = db;
}
