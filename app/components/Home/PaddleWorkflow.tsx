import { cardData } from "@/utils/data";
import Card from "../Reusable/Card";
import SectionHeader from "../Reusable/SectionHeader";
import { CardSizeVariant } from "../Reusable/CardData";

export default function PaddleWorkflow() {
  return (
    <section className="max-w-7xl mx-auto max-lg:px-4 max-xxl:px-6 xxl:px-0 py-10 lg:py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Process"
        heading="How Paddle Art Works"
        desc="Seamless platform connecting players, clubs, and matches"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[48%_50%] gap-3 lg:gap-5 mt-6 md:mt-10 lg:mt-16">
        {cardData.map((item) => (
          <Card
            key={item.id}
            imageSrc={item.image}
            subtitle={item.subtitle}
            title={item.title}
            description={item.desc}
            size={item?.size as CardSizeVariant}
            padding={item?.padding}
          />
        ))}
      </div>
    </section>
  );
}
