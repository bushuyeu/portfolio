import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pavel Bushuyeu
      </h1>
      <p className="mb-4">
        {`Hello. My name is Pavel and I am a technology product leader and entrepreneur with a passion for product design.
        
        Selected achievements and awards:
        ‍ - SmartX
            fastest growing Asset Management Platform, 2022
            Beta launch of a billing application, 2021
        - LogicMonitor
            Gartner's Best Monitoring Tools, 2019
        - Gurtam
            Re-launch of mobile apps, 2017
            Mobile logins 5% -> 75% of total platform logins in 1 year, 2018
        - Vizor Games
            Klondike - Facebooks's Best Web Geme, 2015
            Knights & Brides - Facebook's Best New Game, 2016

        Outside of tech, I enjoys endurance sports and wild nature.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
