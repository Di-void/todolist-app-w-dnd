import type { Tabs, Todo, Theme } from "../types/todo";

/**
 * Helper function for switching themes
 * @param {Theme} theme - Current theme
 */
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

/**
 * Helper for formatting 'items left' text
 * @param {number} active - The number of active todos
 * @returns formatted text depending on the number passed in
 */
export const formatItemsLeftText = (active: number): string => {
  return active === 0 || active > 1 ? `items` : `item`;
};

/**
 * Helper for toggling any todo's status in any of the categories of todos (All, Active or Completed)
 * @param {Todo[]} arr - The Array of Todo's
 * @param {string} id - The unique id of the todo whose status is to be changed
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

/**
 * Helper function for deleting a single todo
 * @param {Todo[]} arr - The Array of Todo's
 * @param {string} id - The unique id of the todo
 * @returns {Todo[]} A new array without the todo with the given id
 */
export const deleteTodoHelper = (arr: Todo[], id: string) => {
  const newArr: Todo[] = arr.filter((item) => {
    return item.id !== id;
  });
  return newArr;
};

/**
 * Helper for getting all todo's of a particular category i.e (all, active or completed)
 * @param {Todo[]} arr - Array of all Todos
 * @param {Tabs} tab - The active tab
 * @returns Array of Todos for a particular category according to the tab specified
 */
export const getTodos = (arr: Todo[], tab: Tabs) => {
  if (tab === "active") {
    const activeArr = arr.filter((todo) => {
      return todo.complete === false;
    });
    return activeArr;
  } else if (tab === "completed") {
    const completedArr = arr.filter((todo) => {
      return todo.complete === true;
    });
    return completedArr;
  } else {
    return arr;
  }
};

/**
 * Helper function for finding index of todo object in given array
 * @param {Todo[]} arr - Array of Todos
 * @param {string} id - id of todo object
 * @returns Index of todo object in the todos array
 */
export const findTodoIndex = (arr: Todo[], id: string): number => {
  return arr.findIndex((todo) => todo.id === id);
};
