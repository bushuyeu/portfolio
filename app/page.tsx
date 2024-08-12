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
      <h4 className="mb-7">
        {`
        Selected achievements and awards
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
      <p className="mb-4">
        {`
        LogicMonitor:
        `}
      </p>
      <ul>
        <li className="mb-4">{"- Gartner's Best Monitoring Tools, 2019"}</li>
      </ul>
      <p className="mb-4">
        {`
        Gurtam:
        `}
      </p>
      <ul>
        <li className="mb-4">{"- re-launch of mobile apps, 2017"}</li>
        <li className="mb-4">{"- mobile logins 5% -> 75% in 1 year, 2018"}</li>
      </ul>
      <p className="mb-4">
        {`
        Vizor Games:
        `}
      </p>
      <ul>
        <li className="mb-4">
          {"- Klondike - Facebooks's Best Web Geme, 2015"}
        </li>
        <li className="mb-4">
          {"- Knights & Brides - Facebook's Best New Game, 2016"}
        </li>
      </ul>
      <p className="mb-4">
        {`Besides tech, I also enjoy endurance sports and wild nature.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
