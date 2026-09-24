export function SiteFooter() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.1]">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-zinc-500 dark:text-zinc-500 sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} The Weekly Read. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
