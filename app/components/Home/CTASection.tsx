import CTAButton from "../Reusable/CTAButton";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto max-lg:px-4 max-xxl:px-6 xxl:px-0 py-10 lg:py-28">
      <div className="flex flex-col gap-4 items-center rounded-20 overflow-hidden bg-[url('/images/players.webp')] bg-no-repeat bg-center bg-cover">
        <div className="bg-black/60 lg:bg-black/40 py-10 lg:py-16 px-6 lg:px-62 flex flex-col items-center gap-3 lg:gap-6  w-full">
          <h2 className="font-poppins text-white text-3xl lg:text-5xl text-center leading-120 -tracking-[1%] font-semibold w-full">
            Ready to transform your paddle club
          </h2>
          <p className="text-white font-space-grotesk text-xl lg:text-2xl leading-150 text-center">
            Streamline management, connect players, and elevate your club
            experience
          </p>
          <div className="flex max-md:flex-col gap-2 lg:gap-4 pt-2 max-md:w-full">
            <CTAButton text="Start Free Trial" variant="primary-colored" />
            <CTAButton
              text="View features"
              variant="secondary"
              showArrow={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
