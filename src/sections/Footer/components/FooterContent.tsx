import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterContent = () => {
  return (
    <section className="relative self-stretch bg-transparent box-border caret-transparent grid col-end-2 col-start-1 row-end-4 row-start-3 grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(95px,auto)] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[95px] pointer-events-auto md:grid-rows-[minmax(68px,auto)] md:min-h-[68px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-lime-200 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <FooterLogo />
      <FooterCopyright />
      <FooterSocial />
    </section>
  );
};
