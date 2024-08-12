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
      <h4 className="mb-4 text-l">
        {`
        Selected achievements and awards
        `}
      </h4>
      <ul>
        <li className="mb-4">
          {`
        Wealth Advisor: SmartX named as the fastest growing Asset Management Platform, 2022
        `}
        </li>
        <li className="mb-4">
          {`
        Gartner: LogicMonitor named as the Best Monitoring Tools, 2019
        `}
        </li>
        <li className="mb-4">
          {`
        Facebook: Klondike gets Facebooks's Best Web Geme, 2015
        `}
        </li>
        <li className="mb-4">
          {`
        Facebook: Knights & Brides - Facebook's Best New Game, 2016
        `}
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
