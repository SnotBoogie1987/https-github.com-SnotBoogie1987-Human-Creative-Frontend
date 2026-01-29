import { SectionContent } from "@/components/SectionContent";

export type SectionProps = {
  rowEnd: string;
  rowStart: string;
  backgroundVariant: string;
  gridRows: string;
  gridRowsMd: string;
  sectionContentContainerVariant: string;
  sectionContentTitleContainerVariant: string;
  sectionContentTitle: React.ReactNode;
  sectionContentTitleClassName: string;
  sectionContentSubtitleContainerVariant: string;
  sectionContentSubtitle: React.ReactNode;
  sectionContentSubtitleClassName: string;
  sectionContentContentContainerVariant: string;
  sectionContentContent: React.ReactNode;
  sectionContentContentClassName?: string;
  showBackToTop?: boolean;
};

export const Section = (props: SectionProps) => {
  return (
    <section
      className={`relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-${props.rowEnd} row-start-${props.rowStart} justify-self-stretch max-h-[99999px] max-w-[99999px] pointer-events-auto`}
    >
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className={props.backgroundVariant}></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div
        className={`relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[${props.gridRows}] ml-[clamp(0px,50%_-_800px,375px)] max-w-[1600px] pointer-events-none py-10 md:grid-rows-[${props.gridRowsMd}] md:ml-[clamp(0px,50%_-_800px,1280px)] md:py-[69.8182px]`}
      >
        <SectionContent
          containerVariant={props.sectionContentContainerVariant}
          titleContainerVariant={props.sectionContentTitleContainerVariant}
          title={props.sectionContentTitle}
          titleClassName={props.sectionContentTitleClassName}
          subtitleContainerVariant={
            props.sectionContentSubtitleContainerVariant
          }
          subtitle={props.sectionContentSubtitle}
          subtitleClassName={props.sectionContentSubtitleClassName}
          contentContainerVariant={props.sectionContentContentContainerVariant}
          content={props.sectionContentContent}
          contentClassName={props.sectionContentContentClassName}
        />
        {props.showBackToTop && (
          <div className="relative self-end caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start mb-[-24.8281px] max-w-[99999px] break-words pointer-events-auto w-[46.875%] ml-[32.9844px] md:mb-[-25.0488px] md:ml-[76.1719px]">
            <h6 className="text-xs caret-transparent leading-[16.8px] break-words text-left font-azeret_mono_v2 md:text-[14.166px] md:leading-[19.8324px]">
              <span className="text-xs caret-transparent leading-[16.8px] break-words underline md:text-[14.166px] md:leading-[19.8324px]">
                <a
                  href="https://www.human-creative.co.uk/manifesto"
                  className="text-xs caret-transparent leading-[16.8px] break-words md:text-[14.166px] md:leading-[19.8324px]"
                >
                  BACK TO TOP ^
                </a>
              </span>
            </h6>
          </div>
        )}
      </div>
    </section>
  );
};
