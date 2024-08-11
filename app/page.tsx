import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pavel Bushuyeu
      </h1>
      <p className="mb-4">
        {`Hello. My name is Pavel and I am a technology product leader and entrepreneur and this is my blog/portfolio.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
