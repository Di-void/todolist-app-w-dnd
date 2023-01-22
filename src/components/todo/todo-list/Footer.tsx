import { formatItemsLeftText } from "../../../utils/misc";
import TabButtons from "./TabButtons";

interface FooterProps {
  active: number;
}

const Footer = ({ active }: FooterProps) => {
  return (
    <footer className="px-4 py-4 flex justify-between">
      <h4 className="text-shadow-light">
        {" "}
        <span>{active}</span> {formatItemsLeftText(active)} left
      </h4>

      {/* status tabs (visible from tablet view) */}
      <div className="hidden md:flex gap-x-6">
        <TabButtons />
      </div>
      {/* end status tabs (visible from tablet view) */}

      <button className="capitalize text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150">
        clear completed
      </button>
    </footer>
  );
};

export default Footer;
