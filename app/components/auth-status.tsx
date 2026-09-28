import Link from "next/link";
import { Avatar } from "./avatar";
import { getCurrentUser } from "../lib/dal";
import { logout } from "../actions/auth";

export async function AuthStatus() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <Link
        href="/login"
        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        Log in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar name={user.displayName} size="sm" />
      <span className="hidden text-sm font-medium text-zinc-700 sm:inline dark:text-zinc-300">
        {user.displayName}
      </span>
      <form action={logout}>
        <button
          type="submit"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
