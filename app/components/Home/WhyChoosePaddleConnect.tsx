import { art_track, user_identity } from "@/utils/svgs";
import CardData from "../Reusable/CardData";
import SectionHeader from "../Reusable/SectionHeader";
import Image from "next/image";
export default function WhyChoosePaddleConnect() {
  return (
    <section className="max-w-7xl mx-auto max-lg:px-4 max-xxl:px-6 xxl:px-0 py-10 lg:py-28 flex flex-col gap-4 items-center">
      <SectionHeader
        tagText="Value"
        heading="Why Choose Paddle Connect"
        desc="Transform your paddle club management experience"
      />
      <div className="grid lg:grid-cols-2 gap-3 lg:gap-5 pt-6 md:pt-10 lg:pt-16">
        <div className="flex rounded-20 bg-grey border border-text/15 overflow-hidden">
          <CardData
            padding="p-3 xl:px-6"
            subtitle="Optimize"
            title="Match organization"
            description="Maximize court utilization and player engagement"
          />
          <Image
            src="/images/playground.webp"
            alt={"Playground"}
            width={0}
            height={0}
            unoptimized
            className="w-1/2 aspect-[4/3.5] object-cover"
          />
        </div>
        <div className="flex flex-col rounded-20 bg-grey border border-text/15 overflow-hidden lg:row-span-2">
          <CardData
            padding="p-6 lg:p-8 xl:p-12"
            subtitle="Skill level tracking"
            title="Adaptable SaaS solution for modern paddle clubs"
            size="large"
          />
          <Image
            src="/images/screens.webp"
            alt={"Mobile screens"}
            width={0}
            height={0}
            unoptimized
            className="w-full object-cover"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-3 lg:gap-5">
          <div className="bg-grey rounded-20 border border-text/15 overflow-hidden flex flex-col justify-center gap-2 p-3 lg:p-6">
            {art_track}
            <h5 className="font-poppins text-text text-xl lg:text-2xl">
              Fair and transparent player development system
            </h5>
            <p className="font-space-grotesk leading-150 text-text">Track</p>
          </div>
          <div className="bg-grey rounded-20 border border-text/15 overflow-hidden flex flex-col justify-center gap-2 p-3 lg:p-6 lg:pb-11">
            {user_identity}
            <h5 className="font-poppins text-text text-xl lg:text-2xl">
              Scalable solution
            </h5>
            <p className="font-space-grotesk leading-150 text-text">
              Multi-club platform designed for growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
