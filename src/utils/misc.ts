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

/**
 * Helper for toggling any todo's status in any of the categories of todos (All, Active or Completed)
 * @param {Todo[]} arr - The Array of Todo's
 * @param {string} id - The unique id of the todo
 * @returns {Todo[]} A new array with the updated todo
 */
export const changeTodoStatusHelper = (arr: Todo[], id: string) => {
  const newArr: Todo[] = arr.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
  return newArr;
};
