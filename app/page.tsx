import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pavel Bushuyeu
      </h1>
      <h3 className="mb-4">
        {`Hello. My name is Pavel and I am a technology product leader and entrepreneur with a passion for product design.
        `}
      </h3>
      <h4 className="mb-4">
        {`
        Selected achievements and awards:
        `}
      </h4>
      <p className="mb-4">
        {`
        SmartX:
        `}
      </p>
      <ul>
        <li className="mb-4">
          {"- fastest growing Asset Management Platform, 2022"}
        </li>
        <li className="mb-4">{"- launch of the Billing Application, 2021"}</li>
      </ul>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
