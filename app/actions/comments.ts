"use server";

import { revalidatePath } from "next/cache";
import { CommentFormSchema, type FormState } from "../lib/definitions";
import { verifySession } from "../lib/dal";
import { createComment } from "../lib/comments";

export async function createCommentAction(
  postSlug: string,
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const session = await verifySession();

  const validated = CommentFormSchema.safeParse({
    body: formData.get("body"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors as Record<string, string[]> };
  }

  createComment({
    postSlug,
    userId: session.userId,
    body: validated.data.body,
  });

  revalidatePath(`/blog/${postSlug}`);
}
