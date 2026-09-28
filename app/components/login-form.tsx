"use client";

import { useActionState } from "react";
import { login } from "../actions/auth";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 text-sm text-zinc-900 focus:border-highlight focus:ring-1 focus:ring-highlight focus:outline-none dark:border-white/[.1] dark:text-zinc-100"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 text-sm text-zinc-900 focus:border-highlight focus:ring-1 focus:ring-highlight focus:outline-none dark:border-white/[.1] dark:text-zinc-100"
        />
        {state?.errors?.password && (
          <p className="text-sm text-red-600 dark:text-red-400">{state.errors.password[0]}</p>
        )}
      </div>

      {state?.message && (
        <p className="text-sm text-red-600 dark:text-red-400">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {isPending ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
