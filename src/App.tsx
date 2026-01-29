import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-[10px] not-italic normal-nums font-normal accent-auto caret-transparent block h-full tracking-[normal] leading-[normal] list-outside list-disc overflow-x-auto overflow-y-scroll pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-arial">
      <img
        src="https://c.animaapp.com/mky98y1tq6fkUW/assets/icon-1.svg"
        alt="Icon"
        className="caret-transparent hidden"
      />
      <div className="relative caret-transparent">
        <div className="caret-transparent">
          <div
            role="region"
            aria-label="top of page"
            className="caret-transparent h-0 pointer-events-none text-nowrap overflow-hidden"
          >
            <span className="caret-transparent hidden text-nowrap">
              top of page
            </span>
          </div>
          <div className="relative caret-transparent min-h-full mx-auto top-0">
            <div className="caret-transparent">
              <div className="caret-transparent">
                <div className="relative caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr]">
                  <div className="absolute bg-white caret-transparent overflow-hidden inset-0"></div>
                  <div className="caret-transparent">
                    <div className="relative caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] overflow-clip">
                      <div className="relative box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto] pointer-events-none">
                        <Header />
                        <Main />
                        <Footer />
                        <div className="fixed caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-full w-full z-[55] left-0 top-0 md:h-auto">
                          <div className="relative self-stretch box-border caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[1fr] grid-rows-[1fr] justify-self-stretch ml-[0%] md:self-start md:justify-self-end md:ml-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="caret-transparent min-w-min"></div>
              <div className="caret-transparent min-w-min"></div>
              <div className="caret-transparent min-w-min"></div>
            </div>
          </div>
          <div
            role="region"
            aria-label="bottom of page"
            className="caret-transparent h-0 pointer-events-none text-nowrap overflow-hidden"
          >
            <span className="caret-transparent hidden text-nowrap">
              bottom of page
            </span>
          </div>
        </div>
      </div>
    </body>
  );
};
