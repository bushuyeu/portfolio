export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pavel Bushuyeu
      </h1>
      <h3 className="mb-6">
        {`Multimodal AI researcher at the University of Hawaiʻi at Mānoa.`}
      </h3>

      <h3 className="mb-6">
        {`Building `}
        <a href="https://prevnt.app/" className="text-blue-400 underline">
          prevnt.app
        </a>
        {` — a preventive-health platform that turns raw biomarker data into clear insights, helping people understand their bodies and live longer, healthier lives.`}
      </h3>
      <h3 className="mt-8 mb-4 text-xl">{`Background`}</h3>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          Sr Product Manager @{" "}
          <a
            href="https://www.smartxadvisory.com/"
            className="text-blue-400 underline"
          >
            SmartX
          </a>
          , an asset management platform
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a
            href="https://logicmonitor.com/"
            className="text-blue-400 underline"
          >
            LogicMonitor
          </a>
          , an infrastructure monitoring platform
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://een.com/" className="text-blue-400 underline">
            EEN
          </a>
          , a video management system
        </li>
        <li className="mb-2">
          Product Manager @{" "}
          <a href="https://gurtam.com/" className="text-blue-400 underline">
            Gurtam
          </a>
          , a fleet management system
        </li>
        <li className="mb-2">
          Associate Product Manager @{" "}
          <a
            href="https://vizor-games.com/"
            className="text-blue-400 underline"
          >
            Vizor
          </a>
          , a game development studio
        </li>
      </ul>
    </section>
  );
}
