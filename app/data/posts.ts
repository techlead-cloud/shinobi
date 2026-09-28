export interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  author: string;
  excerpt: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "designing-interfaces-that-get-out-of-the-way",
    title: "Designing Interfaces That Get Out of the Way",
    date: "September 12, 2026",
    tag: "Design",
    author: "Avery Chen",
    excerpt:
      "Good interface design is invisible. It anticipates what people need before they ask for it, and never draws attention to itself. Here's what that looks like in practice.",
    content: [
      "Good interface design is invisible. It anticipates what people need before they ask for it, and never draws attention to itself.",
      "The best compliment an interface can get isn't 'that looks great' — it's silence, because nobody noticed it at all. They just did the thing they came to do.",
      "That means every added affordance has to earn its place. A tooltip, a modal, a second button — each one is a small tax on someone else's attention. Charge that tax rarely, and only when it buys something real.",
    ],
  },
  {
    slug: "a-simpler-way-to-think-about-state-management",
    title: "A Simpler Way to Think About State Management",
    date: "August 28, 2026",
    tag: "Engineering",
    author: "Avery Chen",
    excerpt:
      "Most applications don't need a complex state library. A closer look at when local state is enough, and when it genuinely isn't.",
    content: [
      "Most applications don't need a complex state library. A closer look at when local state is enough, and when it genuinely isn't.",
      "The question worth asking isn't 'what library should manage this state' — it's 'how far does this state actually need to travel?' Most of it never leaves the component that created it.",
      "Reach for something heavier only when you can name the specific cross-cutting problem it solves. Otherwise you're paying complexity interest on a loan you didn't need to take out.",
    ],
  },
  {
    slug: "writing-documentation-people-actually-read",
    title: "Writing Documentation People Actually Read",
    date: "August 9, 2026",
    tag: "Craft",
    author: "Avery Chen",
    excerpt:
      "Documentation fails for the same handful of reasons every time. A short guide to writing docs that stay useful past the day you wrote them.",
    content: [
      "Documentation fails for the same handful of reasons every time: it's written for the author's memory of the system, not the reader's ignorance of it.",
      "Good docs answer the question the reader actually has, in the order they'd ask it — not the order the system happened to get built in.",
      "And they stay honest over time only if updating them is as easy as changing the code. Anything harder than that, and they quietly go stale.",
    ],
  },
  {
    slug: "the-case-for-boring-technology",
    title: "The Case for Boring Technology",
    date: "July 22, 2026",
    tag: "Engineering",
    author: "Avery Chen",
    excerpt:
      "Novelty is exciting, but reliability compounds. Why choosing well-understood tools is usually the more ambitious decision.",
    content: [
      "Novelty is exciting, but reliability compounds. Why choosing well-understood tools is usually the more ambitious decision.",
      "A boring tool has already had its surprises found by someone else. You inherit their hard-won knowledge for free just by reading the documentation.",
      "Save your team's innovation budget for the one or two places where it actually differentiates the product — and spend it deliberately, not by accident.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
