import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { decrypt, readSessionCookie } from "./session";
import { findUserById } from "./users";

export const getSession = cache(async (): Promise<{ userId: number } | null> => {
  const token = await readSessionCookie();
  if (!token) return null;

  const payload = await decrypt(token);
  if (!payload?.userId) return null;

  return { userId: payload.userId };
});

export const verifySession = cache(async (): Promise<{ userId: number }> => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
});

export interface CurrentUser {
  id: number;
  displayName: string;
}

export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  const session = await getSession();
  if (!session) return null;

  const user = findUserById(session.userId);
  if (!user) return null;

  return { id: user.id, displayName: user.display_name };
});
