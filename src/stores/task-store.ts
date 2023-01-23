import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { mockTodos } from "../utils/mock-todos";
import type { Actions, State, Todo, Input } from "../types/todo";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: [],
    allTodos: [],
    activeTodos: [],
    completedTodos: [],
    activeTab: "all",
    active: 0,
    addTodo: (payload: Input): void => {
      set((state) => {
        state.allTodos.push({
          id: crypto.randomUUID(),
          ...payload,
        });
        state.todos = state.allTodos;
      });
      get().updateActive();
    },
    setTodoStatus: (id: string): void => {
      set((state) => {
        state.todos = state.todos.map((item) => {
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
    getAllTodos: (): void => {
      set((state) => {
        state.todos = state.allTodos;
        state.activeTab = "all";
      });
    },
    getActiveTodos: (): Todo[] => {
      const activeTodos = get().allTodos.filter((todo) => {
        return todo.complete === false;
      });
      set((state) => {
        state.activeTodos = activeTodos;
        state.todos = state.activeTodos;
        state.activeTab = "active";
      });
      return activeTodos;
    },
    getComletedTodos: (): void => {
      const completedTodos = get().allTodos.filter((todo) => {
        return todo.complete === true;
      });
      set((state) => {
        state.completedTodos = completedTodos;
        state.todos = state.completedTodos;
        state.activeTab = "completed";
      });
    },
    deleteTodo: (id: string): void => {
      set((state) => {
        state.todos = state.todos.filter((item) => {
          if (item.id !== id) return true;
          return false;
        });
      });
      get().updateActive();
    },
    deleteCompletedTodos: (): void => {
      set((state) => {
        state.todos = state.todos.filter((item) => {
          return item.complete === false;
        });
      });
    },
  }))
);
