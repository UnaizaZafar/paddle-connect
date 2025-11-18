import { cardData } from "@/public/utils/data";
import Card from "../Reusable/Card";
import SectionHeader from "../Reusable/SectionHeader";
import { CardSizeVariant } from "../Reusable/CardData";

export default function PaddleWorkflow() {
  return (
    <section className="max-w-7xl mx-auto py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Procress"
        heading="How Paddle Art Works"
        desc="Seamless platform connecting players, clubs, and matches"
      />
      <div className="grid grid-cols-2  gap-5 mt-16">
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
