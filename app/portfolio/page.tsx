import { PortfolioWorks } from "app/components/works";

export const metadata = {
  title: "Portfolio - PB",
  description: "Pasha Bushuyeu's work samples",
};

export default function Page() {
  return (
    <section>
      <PortfolioWorks />
    </section>
  );
}
