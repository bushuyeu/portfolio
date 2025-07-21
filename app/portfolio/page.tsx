import { PortfolioWorks } from "app/components/works";

export const metadata = {
  title: "Pavel Bushuyeu",
  description: "Portfolio",
};

export default function Page() {
  return (
    <section>
      <PortfolioWorks />
    </section>
  );
}
