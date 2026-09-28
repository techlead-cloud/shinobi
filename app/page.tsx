import { Avatar } from "./components/avatar";

const posts = [
  {
    title: "Designing Interfaces That Get Out of the Way",
    date: "September 12, 2026",
    tag: "Design",
    author: "Avery Chen",
    excerpt:
      "Good interface design is invisible. It anticipates what people need before they ask for it, and never draws attention to itself. Here's what that looks like in practice.",
  },
  {
    title: "A Simpler Way to Think About State Management",
    date: "August 28, 2026",
    tag: "Engineering",
    author: "Avery Chen",
    excerpt:
      "Most applications don't need a complex state library. A closer look at when local state is enough, and when it genuinely isn't.",
  },
  {
    title: "Writing Documentation People Actually Read",
    date: "August 9, 2026",
    tag: "Craft",
    author: "Avery Chen",
    excerpt:
      "Documentation fails for the same handful of reasons every time. A short guide to writing docs that stay useful past the day you wrote them.",
  },
  {
    title: "The Case for Boring Technology",
    date: "July 22, 2026",
    tag: "Engineering",
    author: "Avery Chen",
    excerpt:
      "Novelty is exciting, but reliability compounds. Why choosing well-understood tools is usually the more ambitious decision.",
  },
];

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
          <article key={post.title} className="py-10 first:pt-12">
            <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
              <Avatar name={post.author} size="sm" />
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {post.tag}
              </span>
              <span aria-hidden="true">&middot;</span>
              <time>{post.date}</time>
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {post.title}
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
