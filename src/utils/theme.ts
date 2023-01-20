export type Theme = "dark" | "light";

export const checkTheme = (theme: Theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
};
