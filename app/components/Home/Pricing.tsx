import { free, pro } from "@/public/utils/svgs";
import PriceCard from "../Reusable/PriceCard";
import SectionHeader from "../Reusable/SectionHeader";

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Plans"
        heading="Pricing"
        desc="Flexible solutions for padel clubs of all sizes"
      />
      <div className="grid grid-cols-2 gap-8 pt-16">
        <PriceCard
          icon={free}
          price="Free"
          title="3-Month Free Trial"
          desc="Perfect for new or growing clubs"
          duration="3 Months Trail Period"
          buttonText="Start Free Trail"
        />
        <PriceCard
          icon={pro}
          price="$29"
          title="Pro"
          desc="Advanced club management"
          duration="Monthly Subscription"
          buttonText="Get Started"
        />
      </div>
    </section>
  );
}
