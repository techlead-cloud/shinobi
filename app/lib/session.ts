import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretValue = process.env.SESSION_SECRET;
if (!secretValue) {
  throw new Error("SESSION_SECRET environment variable is not set");
}
const secretKey = new TextEncoder().encode(secretValue);

const COOKIE_NAME = "session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

type SessionPayload = {
  userId: number;
};

async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function decrypt(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify<SessionPayload>(token, secretKey);
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(userId: number): Promise<void> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  const token = await encrypt({ userId });
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function readSessionCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}
