import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pavel Bushuyeu
      </h1>
      <h3 className="mb-4">
        {` 
        Hello. I'm Pavel, an entrepreneur and technology product leader, focused on B2B SaaS solutions. American University in Bulgaria & 11 Ventures start-up program alum. 
        `}
      </h3>
      <h3 className="mb-4">
        {` 
        Currently, I'm focused on launching AI products, mentoring product managers, and assisting startups with product strategy and UX architecture and design.
        `}
      </h3>
      <h3 className="mb-4 text-xl">
        {` 
        Previous positions
        `}
      </h3>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          Sr Product Manager @{" "}
          <a
            href="https://www.smartxadvisory.com/"
            className="text-blue-400 underline"
          >
            SmartX
          </a>
          , asset management platform;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a
            href="https://logicmonitor.com/"
            className="text-blue-400 underline"
          >
            LogicMonitor
          </a>
          , infrastructure monitoring platform;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://een.com/" className="text-blue-400 underline">
            EEN
          </a>
          , video management system;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://gurtam.com/" className="text-blue-400 underline">
            Gurtam
          </a>
          , fleet management system;
        </li>
        <li className="mb-8">
          Associate Product Manager @{" "}
          <a
            href="https://vizor-games.com/"
            className="text-blue-400 underline"
          >
            Vizor
          </a>
          , game development studio.
        </li>
      </ul>
      <h4 className="mb-4 text-xl">
        {`
        Selected Awards
        `}
      </h4>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          {`Wealth Advisor named SmartX the fastest growing Asset Management Platform of 2022;`}
        </li>
        <li className="mb-2">
          {`Gartner named LogicMonitor the Best Monitoring Tools of 2019;`}
        </li>
        <li className="mb-2">
          {`Facebook named Vizor's Knights & Brides the Best New Game of 2016;`}
        </li>
        <li className="mb-8">
          {`Facebook named Vizor's Klondike the Best Web Geme of 2015.`}
        </li>
      </ul>

      <p className="mb-2">{`Recent blog posts:`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
