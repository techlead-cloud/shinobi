import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "../../components/avatar";
import { CommentList } from "../../components/comment-list";
import { CommentForm } from "../../components/comment-form";
import { getPostBySlug } from "../../data/posts";
import { getCurrentUser } from "../../lib/dal";
import { createCommentAction } from "../../actions/comments";

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post ? `${post.title} — The Weekly Read` : "Post not found",
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const user = await getCurrentUser();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-20">
      <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
        <Avatar name={post.author} size="sm" />
        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          {post.tag}
        </span>
        <span aria-hidden="true">&middot;</span>
        <time>{post.date}</time>
      </div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {post.title}
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-black/[.08] pt-10 dark:border-white/[.1]">
        <h2 className="text-lg font-semibold tracking-tight">Comments</h2>
        <CommentList postSlug={post.slug} />

        {user ? (
          <CommentForm action={createCommentAction.bind(null, post.slug)} />
        ) : (
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            <Link
              href="/login"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100 dark:decoration-zinc-700"
            >
              Log in
            </Link>{" "}
            to leave a comment.
          </p>
        )}
      </div>
    </div>
  );
}
