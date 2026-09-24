import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The Weekly Read",
  description: "The story and the writer behind The Weekly Read.",
};

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:py-20">
      <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
        About
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Stories about software, design, and craft.
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>
          The Weekly Read started as a place to think out loud about
          software, design, and the small decisions that make products feel
          considered instead of accidental. It&apos;s written for people who
          build things and care about doing it well.
        </p>
        <p>
          Every post starts from something real: a bug that revealed a bad
          assumption, a design that finally clicked after five wrong
          attempts, a tool that quietly saved a week of work. The goal isn&apos;t
          to chase trends, but to write things that are still useful a year
          from now.
        </p>
        <p>
          New essays go out roughly once a week. If something here is
          useful, or wrong, I&apos;d like to hear about it.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-1 border-t border-black/[.08] pt-8 dark:border-white/[.1]">
        <p className="font-medium text-zinc-900 dark:text-zinc-100">
          Get in touch
        </p>
        <a
          href="mailto:hello@theweeklyread.com"
          className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-50"
        >
          hello@theweeklyread.com
        </a>
      </div>
    </div>
  );
}
