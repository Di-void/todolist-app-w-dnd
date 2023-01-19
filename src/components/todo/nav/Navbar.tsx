import { HiSun, HiMoon } from "react-icons/hi";

const iconSize = 25;

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h3 className="text-elem-light text-3xl tracking-[.30em] font-semibold">
        TODO
      </h3>

      <button className="">
        <HiMoon size={iconSize} color="white" />
      </button>
    </nav>
  );
};

export default Navbar;
