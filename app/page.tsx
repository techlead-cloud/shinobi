import Link from "next/link";
import { Avatar } from "./components/avatar";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6">
      <section className="border-b border-black/[.08] py-16 dark:border-white/[.1] sm:py-20">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
          Welcome
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Notes on building software, thoughtfully.
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Short essays on design, engineering, and the craft of making
          things well. Published roughly once a week.
        </p>
      </section>

      <section className="flex flex-col divide-y divide-black/[.08] dark:divide-white/[.1]">
        {posts.map((post) => (
          <article key={post.slug} className="py-10 first:pt-12">
            <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
              <Avatar name={post.author} size="sm" />
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {post.tag}
              </span>
              <span aria-hidden="true">&middot;</span>
              <time>{post.date}</time>
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
