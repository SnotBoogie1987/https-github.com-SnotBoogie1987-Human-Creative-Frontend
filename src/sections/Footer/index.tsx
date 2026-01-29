import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative self-stretch box-border caret-transparent grid col-end-2 col-start-1 row-end-9 row-start-8 grid-cols-[1fr] grid-rows-[1fr] justify-self-stretch">
      <FooterContent />
    </footer>
  );
};
