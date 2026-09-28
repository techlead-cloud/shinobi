"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { LoginFormSchema, SignupFormSchema, type FormState } from "../lib/definitions";
import { createSession, deleteSession } from "../lib/session";
import { createUser, findUserByEmail } from "../lib/users";

export async function signup(_prevState: FormState, formData: FormData): Promise<FormState> {
  const validated = SignupFormSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors as Record<string, string[]> };
  }

  const { displayName, email, password } = validated.data;

  if (findUserByEmail(email)) {
    return { message: "An account with that email already exists." };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ email, passwordHash, displayName });

  await createSession(user.id);
  redirect("/");
}

export async function login(_prevState: FormState, formData: FormData): Promise<FormState> {
  const validated = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors as Record<string, string[]> };
  }

  const { email, password } = validated.data;
  const user = findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return { message: "Invalid email or password." };
  }

  await createSession(user.id);
  redirect("/");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/");
}
