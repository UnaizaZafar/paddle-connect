import { paddlePlatformCardsData } from "@/utils/data";
import PlatformCard from "../Reusable/PlatformCard";
import SectionHeader from "../Reusable/SectionHeader";
export default function PaddlePlatform() {
  return (
    <section className="max-w-7xl mx-auto max-lg:px-4 max-xxl:px-6 xxl:px-0 py-10 lg:py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Roles"
        heading="The All-in-One Paddle Platform"
        desc="A connected platform for gym owners and players to coordinate matches, approve requests, upgrade levels, and stay notified."
      />
      <div className=" pt-6 md:pt-10 lg:pt-16 flex flex-col gap-6 md:gap-10 lg:gap-16">
        {paddlePlatformCardsData.map((item) => (
          <PlatformCard
            key={item.id}
            subtitle={item.subtitle}
            title={item.title}
            desc={item.desc}
            imageSrc={item.imageSrc}
            extraClasses={item.extraClasses}
            imageWrapper={item?.imageWrapper}
            allowOverflow={item?.allowOverflow}
          />
        ))}
      </div>
    </section>
  );
}
