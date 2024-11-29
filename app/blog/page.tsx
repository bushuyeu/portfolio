import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "PB chatting",
  description:
    "Pasha's posts on product management, entrepreneurship and just things he enjoys",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        PB's Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
