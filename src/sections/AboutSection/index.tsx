import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-3 row-start-2 justify-self-stretch max-h-[99999px] max-w-[99999px] pointer-events-auto">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-0 grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(1240.01px,auto)] ml-[clamp(0px,50%_-_800px,375px)] max-w-[1600px] pointer-events-none gap-y-0 py-10 md:gap-x-[normal] md:grid-rows-[minmax(1020.96px,auto)] md:ml-[clamp(0px,50%_-_800px,1280px)] md:gap-y-[normal] md:py-[69.8182px]">
        <AboutContent />
      </div>
    </section>
  );
};
