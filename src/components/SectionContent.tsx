export type SectionContentProps = {
  containerVariant: string;
  titleContainerVariant: string;
  title: React.ReactNode;
  titleClassName: string;
  subtitleContainerVariant: string;
  subtitle: React.ReactNode;
  subtitleClassName: string;
  contentContainerVariant: string;
  content: React.ReactNode;
  contentClassName: string;
  showImpactCategories?: boolean;
};

export const SectionContent = (props: SectionContentProps) => {
  return (
    <div
      role=""
      className={`relative box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center pointer-events-auto w-[90%] py-5 md:pt-[40.4744px] md:pb-[65.7708px] ${props.containerVariant}`}
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <div
        className={`relative self-center caret-transparent max-w-[99999px] order-1 break-words ${props.titleContainerVariant}`}
      >
        <h1 className={props.titleClassName}>{props.title}</h1>
      </div>
      <div
        className={`relative self-center caret-transparent max-w-[99999px] order-2 break-words md:mb-[35.415px] ${props.subtitleContainerVariant}`}
      >
        <h6 className={props.subtitleClassName}>{props.subtitle}</h6>
      </div>
      <div
        className={`relative self-center caret-transparent max-w-[99999px] order-3 break-words ${props.contentContainerVariant}`}
      >
        {props.content}
      </div>
    </div>
  );
};
