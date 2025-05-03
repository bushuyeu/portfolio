// import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pasha Bushuyeu
      </h1>
      <h3 className="mb-4">
        {`I aim to empower people to become healthier, wealthier, and more useful. I do this by building tech products and providing mentorship & support.`}
      </h3>
      <h3 className="mb-4 text-xl">{`My specialties`}</h3>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          0 to 1: I’ve helped launch several profitable products, including
          Video Dokuta—a video AI for the physical world; billing at SmartX; UX
          Monitoring at LogicMonitor; Body Camera App at EEN.
        </li>
        <li className="mb-2">
          ML Products: I enjoy building data products powered by machine
          learning. Examples: root cause analysis of infrastructure alerts for
          LogicMonitor Topology, driver scoring for Gurtam Wialon, and GenAI
          utilization at Video Dokuta.
        </li>

        <li className="mb-2">
          Design: I advocate for strong design principles and the use of
          front-end to design libraries to accelerate design and development.
          I’ve helped build design systems at both SmartX and LogicMonitor.
        </li>
      </ul>
      <h3 className="mb-4 text-xl">
        {` 
        Previous experience
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
          , an asset management platform;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a
            href="https://logicmonitor.com/"
            className="text-blue-400 underline"
          >
            LogicMonitor
          </a>
          , an infrastructure monitoring platform;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://een.com/" className="text-blue-400 underline">
            EEN
          </a>
          , a video management system;
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://gurtam.com/" className="text-blue-400 underline">
            Gurtam
          </a>
          , a fleet management system;
        </li>
        <li className="mb-8">
          Associate Product Manager @{" "}
          <a
            href="https://vizor-games.com/"
            className="text-blue-400 underline"
          >
            Vizor
          </a>
          , a game development studio.
        </li>
      </ul>
      {/* <h4 className="mb-4 text-xl">
        {`
        Selected Awards
        `}
      </h4>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          {`Wealth Advisor named SmartX the Fastest Growing Asset Management Platform of 2022;`}
        </li>
        <li className="mb-2">
          {`Gartner named LogicMonitor as the Best Monitoring Tools of 2019;`}
        </li>
        <li className="mb-2">
          {`Facebook named Vizor's Knights & Brides the Best New Game of 2016;`}
        </li>
        <li className="mb-8">
          {`Facebook named Vizor's Klondike the Best Web Game of 2015.`}
        </li>
      </ul> */}
      {/* 
      <p className="mb-2">{`Recent blog posts:`}</p>
      <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
