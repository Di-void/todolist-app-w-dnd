import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { mockTodos } from "../utils/mock-todos";
import type { Actions, State, Todo, Input } from "../types/todo";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: [],
    active: 0,
    addTodo: (payload: Input): void => {
      set((state) => {
        state.todos.push({
          id: crypto.randomUUID(),
          ...payload,
        });
        state.todos.reverse();
      });
      get().updateActive();
    },
    setTodoStatus: (id: string): void => {
      set((state) => {
        state.todos = get().todos.map((item) => {
          if (item.id === id) {
            return { ...item, complete: !item.complete };
          }
          return item;
        });
      });
      get().updateActive();
    },
    updateActive: () => {
      set((state) => {
        state.active = state.getActiveTodos().length;
      });
    },
    getActiveTodos: (): Todo[] => {
      const activeTodos = get().todos.filter((todo) => {
        return todo.complete === false;
      });
      return activeTodos;
    },
    getComletedTodos: (): Todo[] => {
      const completeTodos = get().todos.filter((todo) => {
        return todo.complete === true;
      });
      return completeTodos;
    },
    deleteTodo: (id: string): void => {
      set((state) => {
        state.todos.filter((item) => {
          if (item.id !== id) return true;
          return false;
        });
      });
    },
    deleteCompletedTodos: (): void => {
      set((state) => {
        state.todos.filter((item) => {
          return item.complete === false;
        });
      });
    },
  }))
);
