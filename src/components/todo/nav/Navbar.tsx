import { useAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import { HiSun, HiMoon } from "react-icons/hi";
import { checkTheme, Theme } from "../../../utils/theme";

export const themeAtom = atomWithStorage<Theme>("theme", "light");

const iconSize = 25;

const Navbar = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  checkTheme(theme);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  };

  const setTitle = () => (theme === "dark" ? "Light Mode" : "Dark Mode");

  return (
    <nav className="flex justify-between items-center">
      <h3 className="text-elem-light text-3xl tracking-[.30em] font-semibold">
        TODO
      </h3>

      <button className="" title={setTitle()} onClick={toggleTheme}>
        {theme === "light" ? (
          <HiMoon size={iconSize} color="white" />
        ) : (
          <HiSun size={iconSize} color="white" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
