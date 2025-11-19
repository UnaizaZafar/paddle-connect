import { user1, user2, user3 } from "@/public/utils/svgs";
import CTAButton from "../Reusable/CTAButton";

export default function HeroSection() {
  return (
    <div className="bg-[url(/images/hero-image.webp)] bg-no-repeat bg-cover bg-bottom">
      <div className="bg-black/50">
        <div className="min-h-screen h-auto flex flex-col gap-4 lg:gap-6 justify-center items-center  max-w-[1032px] mx-auto relative max-lg:px-4">
          <h1 className="font-bold  font-poppins text-3xl lg:text-5xl tracking-[-1%] xl:text-64 leading-120 text-white text-center">
            Smart Matchmaking for Paddle Clubs and Players
          </h1>
          <p className="font-space-grotesk text-center text-lg lg:text-xl xl:text-2xl leading-150 text-white">
            Automate player connections and match management with our powerful
            platform. Streamline court bookings, skill tracking, and player
            interactions across paddle clubs.
          </p>
          <div className="flex max-md:flex-col gap-2 lg:gap-4 pt-2 max-md:w-full">
            <CTAButton
              text="Start Free Trial"
              variant="primary-colored"
            />
            <CTAButton
              text="View features"
              variant="secondary"
              showArrow={false}
            />
          </div>
          <div className="place-self-end flex gap-3 absolute right-20 bottom-10 xl:bottom-30 pt-20">
            {user1}
            <span className="rounded-full absolute translate-x-6 lg:translate-x-9 z-10">
              {user2}
            </span>
            <span className="rounded-full absolute translate-x-12 lg:translate-x-18 z-20">
              {user3}
            </span>
            <p className="font-poppins text-sm lg:text-base font-medium text-white translate-x-12 lg:translate-x-18">
              20K+ <br /> <span className="font-normal">Active Users</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
