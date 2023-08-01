import { getContent } from "$lib/content";

export async function load({ params }) {
  const { slug } = params;
  const content = await getContent();
  const post = content.queryContent(`blog/${slug}`);
  return { post, about: content.meta.about };
}
