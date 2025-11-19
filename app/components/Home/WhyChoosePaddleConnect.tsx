import { art_track, user_identity } from "@/public/utils/svgs";
import CardData from "../Reusable/CardData";
import SectionHeader from "../Reusable/SectionHeader";
import Image from "next/image";
export default function WhyChoosePaddleConnect() {
  return (
    <section className="max-w-7xl mx-auto py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Value"
        heading="Why Choose Paddle Connect"
        desc="Transform your padel club management experience"
      />
      <div className="grid grid-cols-2 gap-5 pt-16">
        <div className="flex rounded-20 bg-grey border border-primary/15 overflow-hidden">
          <CardData
            padding="px-6"
            subtitle="Optimize"
            title="Match organization"
            description="Maximize court utilization and player engagement"
          />
          <Image
            src="/images/playground.webp"
            alt={"image"}
            width={0}
            height={0}
            unoptimized
            className="w-1/2 aspect-[4/3.5] object-cover"
          />
        </div>
        <div className="flex flex-col rounded-20 bg-grey border border-primary/15 overflow-hidden row-span-2">
          <CardData
            padding="p-12"
            subtitle="Skill level tracking"
            title="Adaptable SaaS solution for modern padel clubs"
            size="large"
          />
          <Image
            src="/images/screens.webp"
            alt={"image"}
            width={0}
            height={0}
            unoptimized
            className="w-full  object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-grey rounded-20 border border-primary/15 overflow-hidden flex flex-col justify-center gap-2 p-6">
            {art_track}
            <h5 className="font-poppins text-primary text-2xl">
              Fair and transparent player development system
            </h5>
            <p className="font-space-grotesk leading-150 text-primary">Track</p>
          </div>
          <div className="bg-grey rounded-20 border border-primary/15 overflow-hidden flex flex-col justify-center gap-2 p-6 pb-11">
            {user_identity}
            <h5 className="font-poppins text-primary text-2xl">
              Scalable solution
            </h5>
            <p className="font-space-grotesk leading-150 text-primary">
              Multi-club platform designed for growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
