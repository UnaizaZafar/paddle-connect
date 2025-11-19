import Image from "next/image";
import { coreFeaturesData } from "@/public/utils/data";
import SectionHeader from "../Reusable/SectionHeader";
import Feature from "../Reusable/Feature";

export default function CoreFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 2xl:px-0 py-10 lg:py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Platforms"
        heading="Core Features"
        desc="Powerful tools for paddle club management"
      />
      <div className="flex max-md:flex-col gap-4 md:gap-7 xl:gap-12 items-center pt-6 md:pt-10 lg:pt-16">
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 flex-1">
          {coreFeaturesData.slice(0, 2).map((item) => (
            <Feature
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <Image
          src={"/images/badminton.webp"}
          alt="Badminton"
          width={414}
          height={414}
          className="hidden lg:block"
        />
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 flex-1">
          {coreFeaturesData.slice(-2).map((item) => (
            <Feature
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
