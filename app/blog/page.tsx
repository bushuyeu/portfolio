import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Pasha Bushuyeu",
  description: "Things I Enjoy",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">PB</h1>
      <BlogPosts />
    </section>
  );
}
