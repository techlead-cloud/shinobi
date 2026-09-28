import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "../components/signup-form";

export const metadata: Metadata = {
  title: "Sign up — The Weekly Read",
  description: "Create an account to comment on The Weekly Read.",
};

export default function Signup() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Sign up to leave comments on posts.
      </p>

      <div className="mt-8">
        <SignupForm />
      </div>

      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100 dark:decoration-zinc-700"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
