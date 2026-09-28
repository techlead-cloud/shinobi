import "server-only";
import { db } from "./db";

export interface CommentWithAuthor {
  id: number;
  body: string;
  created_at: string;
  display_name: string;
}

export function listCommentsForPost(postSlug: string): CommentWithAuthor[] {
  const statement = db.prepare(`
    SELECT comments.id, comments.body, comments.created_at, users.display_name
    FROM comments
    JOIN users ON users.id = comments.user_id
    WHERE comments.post_slug = ?
    ORDER BY comments.created_at ASC
  `);
  return statement.all(postSlug) as unknown as CommentWithAuthor[];
}

export function createComment(input: {
  postSlug: string;
  userId: number;
  body: string;
}): void {
  const statement = db.prepare(
    "INSERT INTO comments (post_slug, user_id, body) VALUES (?, ?, ?)",
  );
  statement.run(input.postSlug, input.userId, input.body);
}
