import { free, pro } from "@/public/utils/svgs";
import PriceCard from "../Reusable/PriceCard";
import SectionHeader from "../Reusable/SectionHeader";

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto max-lg:px-4 max-xxl:px-6 xxl:px-0 py-10 lg:py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Plans"
        heading="Pricing"
        desc="Flexible solutions for paddle clubs of all sizes"
      />
      <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-8 pt-6 md:pt-10 lg:pt-16">
        <PriceCard
          icon={free}
          price="Free"
          title="3-Month Free Trial"
          desc="Perfect for new or growing clubs"
          duration="3 Months Trial Period"
          buttonText="Start Free Trial"
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
