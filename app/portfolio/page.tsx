import { PortfolioWorks } from "app/components/works";

export const metadata = {
  title: "Pasha Bushuyeu",
  description: "work samples",
};

export default function Page() {
  return (
    <section>
      <PortfolioWorks />
    </section>
  );
}
