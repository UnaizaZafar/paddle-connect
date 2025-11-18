import CTAButton from "../Reusable/CTAButton";

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto my-28 flex flex-col gap-4 items-center rounded-20 overflow-hidden bg-[url('/images/players.webp')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black/40 py-16 px-64 flex flex-col items-center gap-6">
        <h1 className="font-poppins text-white text-5xl text-center leading-120 -tracking-[1%] font-semibold">
          Ready to transform your padel club
        </h1>
        <p className="text-white font-space-grotesk text-2xl leading-150 text-center">
          Streamline management, connect players, and elevate your club
          experience
        </p>
        <div className="flex gap-4 pt-2 ">
          <CTAButton text="Start Free Trail" variant="primary-colored" />
          <CTAButton
            text="View features"
            variant="secondary"
            showArrow={false}
          />
        </div>
      </div>
    </section>
  );
}
