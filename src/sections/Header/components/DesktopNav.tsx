import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopNav = () => {
  return (
    <div className="relative self-center box-border caret-transparent gap-x-0 hidden col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,160fr)] grid-rows-[minmax(min-content,1fr)] justify-self-end max-h-[99999px] max-w-[99999px] min-w-min gap-y-0 w-10 ml-0 mr-[52.344px] mt-0 md:self-start md:grid md:grid-cols-[minmax(0px,834.891fr)] md:justify-self-start md:w-[64.9568%] md:ml-[182.245px] md:mr-0 md:mt-[22.5695px]">
      <div className="caret-transparent hidden h-full min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
        <NavMenu />
      </div>
      <div className="relative self-start box-border caret-transparent hidden col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[1fr] grid-rows-[1fr] h-full justify-self-start max-h-[99999px] max-w-[99999px] w-full">
        <nav aria-label="Site" className="caret-transparent hidden h-full">
          <div className="relative self-stretch box-border caret-transparent hidden col-end-2 col-start-1 row-end-2 row-start-1 h-full justify-self-stretch max-h-[99999px] max-w-[99999px] md:block">
            <button
              type="button"
              aria-label="Menu"
              className="text-[13.3333px] bg-black caret-transparent block h-full min-h-2.5 min-w-2.5 text-center w-full p-0 rounded-lg font-arial md:bg-transparent hover:bg-white"
            >
              <span className="items-center caret-transparent flex flex-row-reverse grow h-full justify-center w-full overflow-hidden">
                <span className="text-[15px] caret-transparent hidden leading-6 max-w-full min-w-[27px] text-ellipsis text-nowrap overflow-hidden ml-0.5 font-madefor_text">
                  Menu
                </span>
                <span className="caret-transparent block fill-white shrink-0 h-10 min-w-px w-10 mr-0.5 md:fill-black">
                  <span className="caret-transparent flex fill-white h-10 w-10 md:fill-black">
                    <img
                      src="https://c.animaapp.com/mky98y1tq6fkUW/assets/icon-4.svg"
                      alt="Icon"
                      className="caret-transparent flex h-10 w-10"
                    />
                  </span>
                </span>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
