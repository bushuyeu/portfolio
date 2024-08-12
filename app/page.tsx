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
      <h4 className="mb-4 text-xl">
        {`
        Selected achievements and awards:
        `}
      </h4>
      <ul>
        <li className="mb-4">
          {`- Wealth Advisor named SmartX the fastest growing Asset Management Platform of 2022;`}
        </li>
        <li className="mb-4">
          {`- Gartner named LogicMonitor the Best Monitoring Tools of 2019;`}
        </li>
        <li className="mb-4">
          {`- Facebook names Vizor's Knights & Brides the Best New Game of 2016;`}
        </li>
        <li className="mb-4">
          {`- Facebook names Vizor's Klondike the Best Web Geme of 2015.`}
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
