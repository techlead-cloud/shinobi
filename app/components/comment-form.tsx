"use client";

import { useActionState } from "react";
import type { FormState } from "../lib/definitions";

export function CommentForm({
  action,
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
}) {
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <textarea
        name="body"
        rows={4}
        placeholder="Add a comment…"
        required
        className="w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-3 text-sm leading-6 text-zinc-900 placeholder:text-zinc-400 focus:border-highlight focus:ring-1 focus:ring-highlight focus:outline-none dark:border-white/[.1] dark:text-zinc-100 dark:placeholder:text-zinc-600"
      />
      {state?.errors?.body && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {state.errors.body[0]}
        </p>
      )}
      {state?.message && (
        <p className="text-sm text-red-600 dark:text-red-400">{state.message}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {isPending ? "Posting…" : "Post comment"}
      </button>
    </form>
  );
}
