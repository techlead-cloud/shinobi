import "server-only";
import { db } from "./db";

export interface User {
  id: number;
  email: string;
  password_hash: string;
  display_name: string;
  created_at: string;
}

export function findUserByEmail(email: string): User | undefined {
  const statement = db.prepare("SELECT * FROM users WHERE email = ?");
  return statement.get(email) as User | undefined;
}

export function findUserById(id: number): User | undefined {
  const statement = db.prepare("SELECT * FROM users WHERE id = ?");
  return statement.get(id) as User | undefined;
}

export function createUser(input: {
  email: string;
  passwordHash: string;
  displayName: string;
}): User {
  const statement = db.prepare(
    "INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)",
  );
  const result = statement.run(input.email, input.passwordHash, input.displayName);
  const user = findUserById(Number(result.lastInsertRowid));
  if (!user) {
    throw new Error("Failed to create user");
  }
  return user;
}
