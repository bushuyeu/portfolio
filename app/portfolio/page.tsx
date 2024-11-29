import { PortfolioWorks } from "app/components/works";

export const metadata = {
  title: "Portfolio - PB",
  description: "Pasha Bushuyeu's portfolio of work",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        PB's Portfolio
      </h1>
      <PortfolioWorks />
    </section>
  );
}
