import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-4 row-start-3 justify-self-stretch max-h-[99999px] max-w-[99999px] pointer-events-auto">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-lime-200 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(540.016px,auto)] ml-[clamp(0px,50%_-_800px,375px)] max-w-[1600px] pointer-events-none py-10 md:grid-rows-[minmax(568.664px,auto)] md:ml-[clamp(0px,50%_-_800px,1280px)] md:py-[69.8182px]">
        <HeroContent />
      </div>
    </section>
  );
};
