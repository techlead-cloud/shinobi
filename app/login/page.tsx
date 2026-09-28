import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "../components/login-form";

export const metadata: Metadata = {
  title: "Log in — The Weekly Read",
  description: "Log in to comment on The Weekly Read.",
};

export default function Login() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Welcome back. Log in to leave a comment.
      </p>

      <div className="mt-8">
        <LoginForm />
      </div>

      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100 dark:decoration-zinc-700"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
