import { user1, user2, user3 } from "@/public/utils/svgs";
import CTAButton from "../Reusable/CTAButton";

export default function HeroSection() {
  return (
    <div className="bg-[url(/images/hero-image.webp)] bg-no-repeat bg-cover">
      <div className="bg-black/50">
        <div className="h-screen flex flex-col gap-6 justify-center items-center  max-w-5xl mx-auto">
          <h1 className="font-bold font-poppins text-6xl leading-120 text-white text-center">
            Smart Matchmaking for Paddle Clubs and Players
          </h1>
          <p className="font-space-grotesk text-center text-2xl leading-150 text-white">
            Automate player connections and match management with our powerful
            platform. Streamline court bookings, skill tracking, and player
            interactions across paddle clubs.
          </p>
          <div className="flex gap-4 pt-2 ">
            <CTAButton
              text="Start Free Trail"
              variant="primary-colored"
            />
            <CTAButton
              text="View features"
              variant="secondary"
              showArrow={false}
            />
          </div>
          <div className="place-self-end flex gap-3 relative pt-20">
            {user1}
            <span className="rounded-full absolute translate-x-9 z-10">
              {user2}
            </span>
            <span className="rounded-full absolute translate-x-18 z-20">
              {user3}
            </span>
            <p className="font-poppins font-medium text-white translate-x-18">
              20K+ <br /> <span className="font-normal">Active Users</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
