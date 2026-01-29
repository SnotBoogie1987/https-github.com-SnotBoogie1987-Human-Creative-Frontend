export type ImpactCategoryProps = {
  label: string;
  variant: string;
};

export const ImpactCategory = (props: ImpactCategoryProps) => {
  return (
    <div
      className={`relative self-center caret-transparent max-w-[99999px] break-words uppercase w-[99.8561%] mb-[8.40626px] ${props.variant}`}
    >
      <h6 className="text-lime-200 text-base font-bold caret-transparent leading-[22.4px] break-words text-center font-azeret_mono_v2 md:text-[22.261px] md:leading-[31.1654px]">
        {props.label}
      </h6>
    </div>
  );
};
