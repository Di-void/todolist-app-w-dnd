import type { Todo } from "../types/todo";
export type Theme = "dark" | "light";

export type TodoCache = {
  all: Todo[];
  active: Todo[];
  completed: Todo[];
};

export const switchTheme = (theme: Theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
};

export const formatItemsLeftText = (active: number): string => {
  return active === 0 || active > 1 ? `items` : `item`;
};

export const changeTodoStatusHelper = (arr: Todo[], id: string): Todo[] => {
  const newArr = arr.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
  });
  return newArr as Todo[];
};

// store todo array to localStorage
export const updateLocalStorageState = (): void => {};
