import { Avatar } from "./avatar";
import { listCommentsForPost } from "../lib/comments";

function formatTimestamp(sqliteUtcTimestamp: string): string {
  const date = new Date(sqliteUtcTimestamp.replace(" ", "T") + "Z");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function CommentList({ postSlug }: { postSlug: string }) {
  const comments = listCommentsForPost(postSlug);

  if (comments.length === 0) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        No comments yet.
      </p>
    );
  }

  return (
    <ul className="flex flex-col divide-y divide-black/[.08] dark:divide-white/[.1]">
      {comments.map((comment) => (
        <li key={comment.id} className="flex gap-3 py-6 first:pt-0">
          <Avatar name={comment.display_name} size="sm" className="mt-0.5" />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {comment.display_name}
              </span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
                &middot;
              </span>
              <time className="text-zinc-500 dark:text-zinc-500">
                {formatTimestamp(comment.created_at)}
              </time>
            </div>
            <p className="leading-6 whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">
              {comment.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
