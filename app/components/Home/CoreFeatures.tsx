import Image from "next/image";
import { coreFeaturesData } from "@/public/utils/data";
import SectionHeader from "../Reusable/SectionHeader";
import Feature from "../Reusable/Feature";

export default function CoreFeatures() {
  return (
    <section className="max-w-7xl mx-auto py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Platforms"
        heading="Core Features"
        desc="Powerful tools for paddle club management"
      />
      <div className="flex gap-12 items-center pt-16">
        <div className="flex flex-col gap-16 flex-1">
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
          alt="Badmintion"
          width={414}
          height={414}
        />
        <div className="flex flex-col gap-16 flex-1">
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
