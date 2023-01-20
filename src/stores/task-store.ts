import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Actions, State, Todo, Input } from "../types/todo";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: [],
    active: 0,
    addTodo: (payload: Input) => {
      set((state) => {
        state.todos.push({
          id: crypto.randomUUID(),
          ...payload,
        });
        state.todos.reverse();
      });
    },
    getActiveTodos: () => {
      const activeTodos = get().todos.filter((todo) => {
        if (todo.status === "active") {
          return true;
        }
        return false;
      });
      return activeTodos;
    },
    getComletedTodos: () => {
      const completeTodos = get().todos.filter((todo) => {
        if (todo.status === "complete") {
          return true;
        }
        return false;
      });
      return completeTodos;
    },
    deleteTodo: (id: string) => {
      //
    },
    deleteCompletedTodos: () => {
      //
    },
    setTodoStatus: () => {
      //
    },
  }))
);
