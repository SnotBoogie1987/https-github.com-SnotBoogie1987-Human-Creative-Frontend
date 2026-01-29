import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="relative self-stretch box-border caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[1fr] grid-rows-[1fr] justify-self-stretch">
      <section className="relative self-stretch bg-transparent caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-20 pointer-events-auto md:min-h-0">
        <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
          <div className="absolute bg-lime-200 caret-transparent h-full w-full top-0"></div>
          <div className="caret-transparent h-full"></div>
        </div>
        <div className="relative caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] overflow-clip md:overflow-visible">
          <Navbar />
        </div>
      </section>
    </header>
  );
};
