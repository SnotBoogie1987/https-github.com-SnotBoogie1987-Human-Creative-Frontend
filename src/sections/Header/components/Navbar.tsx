import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNavToggle } from "@/sections/Header/components/MobileNavToggle";

export const Navbar = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-0 grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(80.0001px,auto)] pointer-events-none gap-y-0 md:grid-rows-[minmax(113.296px,auto)]">
      <div
        role=""
        className="relative self-start box-border caret-transparent gap-x-0 grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,374.5fr)] grid-rows-[minmax(50.391px,auto)] justify-self-start ml-[-0.5px] max-h-[99999px] max-w-[99999px] pointer-events-auto gap-y-0 w-[99.8667%] mt-[34.375px] mb-0 md:self-end md:grid-cols-[minmax(0px,1265.29fr)] md:grid-rows-[minmax(73.2655px,auto)] md:mb-[-6.07117px] md:w-[100.023%] md:ml-0 md:mt-0"
      >
        <div className="absolute bg-black caret-transparent border-[3px] border-solid inset-0 md:border-0"></div>
        <Logo />
        <DesktopNav />
        <div className="relative self-center box-border caret-transparent gap-x-0 hidden col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,160fr)] grid-rows-[minmax(min-content,1fr)] justify-self-end max-h-[99999px] max-w-[99999px] min-w-min gap-y-0 w-10 mr-[52.344px] mt-0 md:self-start md:grid md:grid-cols-[minmax(0px,126.5fr)] md:w-[9.99772%] md:mr-[104.632px] md:mt-[22.5695px]">
          <div className="caret-transparent hidden h-full min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <nav
              aria-label="Site"
              className="bg-transparent box-border caret-transparent flex h-full w-full md:bg-transparent"
            >
              <ul className="caret-transparent gap-x-2.5 flex flex-col grow flex-wrap list-none min-h-0 min-w-fit gap-y-2.5 w-full pl-0 md:gap-x-0 md:flex-row md:min-h-[auto]">
                <li className="items-center caret-transparent gap-x-2.5 flex flex-col grow min-h-0 min-w-0 gap-y-2.5 md:gap-x-0 md:flex-row md:min-h-[auto] md:min-w-[auto] md:gap-y-0">
                  <div className="caret-transparent grow h-auto min-h-0 min-w-0 w-full md:h-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
                    <div className="relative items-center bg-transparent box-border caret-transparent gap-x-1.5 flex h-full justify-center gap-y-1.5 px-3 py-5 md:bg-transparent md:py-2">
                      <a
                        href="https://www.human-creative.co.uk/account"
                        className="caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-black before:block before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:inset-0 before:font-arial"
                      >
                        <div className="text-lime-200 text-base caret-transparent leading-[25.6px] text-nowrap font-azeret_mono_v2 md:text-white md:text-[11.1305px] md:leading-[13.3566px] after:accent-auto after:bg-lime-200 after:caret-transparent after:text-lime-200 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-none after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:text-nowrap after:transform-none after:visible after:w-full after:border-separate after:font-azeret_mono_v2 after:md:bg-white after:md:text-white after:md:text-[11.1305px] after:md:leading-[13.3566px] after:md:scale-x-0">
                          ACCOUNT
                        </div>
                      </a>
                    </div>
                  </div>
                  <span className="self-stretch border-t-slate-300 caret-transparent hidden border-l-black border-l-0 border-t md:border-l-slate-300 md:border-t-black md:border-t-0 md:border-l"></span>
                </li>
              </ul>
              <div className="absolute caret-transparent hidden justify-between pointer-events-none inset-0"></div>
            </nav>
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
        <MobileNavToggle />
      </div>
      <div className="relative self-start caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-center pointer-events-auto w-[92.8833%] mr-0 mt-[12.8438px] md:mr-[0.5px] md:mt-[24.0316px]">
        <p className="caret-transparent">
          <span className="caret-transparent gap-x-0 flex overflow-x-clip gap-y-0">
            <span className="text-[7.70752px] caret-transparent gap-x-[3.80869px] flex leading-[12.332px] gap-y-[3.80869px] pr-[3.80869px] font-azeret_mono_v2 md:text-[10.1185px] md:gap-x-[13.0003px] md:leading-[16.1896px] md:gap-y-[13.0003px] md:pr-[13.0003px]">
              <span className="text-[7.70752px] items-center caret-transparent gap-x-[3.80869px] flex leading-[12.332px] gap-y-[3.80869px] md:text-[10.1185px] md:gap-x-[13.0003px] md:leading-[16.1896px] md:gap-y-[13.0003px]">
                <span className="text-[7.70752px] caret-transparent block h-[9.24903px] leading-[12.332px] md:text-[10.1185px] md:h-[12.1422px] md:leading-[16.1896px]">
                  <span className="text-[7.70752px] caret-transparent block leading-[9.24903px] text-nowrap md:text-[10.1185px] md:leading-[12.1422px]">
                    WITH THANKS TO: MUSICBED | PELI PRODUCTS | BETTERHELP |
                    CALMZONE | THE GYM GROUP | POLICYBEE | MEDIA TRAVELS |
                    MICHAEL B. BENNETT ACCOUNTING | FLYKITT | ATOMOS | WEX PHOTO
                    VIDEO |
                  </span>
                </span>
              </span>
            </span>
            <span className="text-[7.70752px] caret-transparent gap-x-[3.80869px] flex leading-[12.332px] gap-y-[3.80869px] pr-[3.80869px] font-azeret_mono_v2 md:text-[10.1185px] md:gap-x-[13.0003px] md:leading-[16.1896px] md:gap-y-[13.0003px] md:pr-[13.0003px]">
              <span className="text-[7.70752px] items-center caret-transparent gap-x-[3.80869px] flex leading-[12.332px] gap-y-[3.80869px] md:text-[10.1185px] md:gap-x-[13.0003px] md:leading-[16.1896px] md:gap-y-[13.0003px]">
                <span className="text-[7.70752px] caret-transparent block h-[9.24903px] leading-[12.332px] md:text-[10.1185px] md:h-[12.1422px] md:leading-[16.1896px] before:accent-auto before:caret-transparent before:text-black before:block before:text-[7.70752px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[9.24903px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-azeret_mono_v2 before:md:text-[10.1185px] before:md:leading-[12.1422px]"></span>
              </span>
            </span>
          </span>
        </p>
      </div>
      <div className="relative self-start caret-transparent hidden col-end-2 col-start-1 row-end-2 row-start-1 h-[60px] justify-self-end pointer-events-auto w-[60px]"></div>
    </div>
  );
};
