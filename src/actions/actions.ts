"use server";

export default async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
}
