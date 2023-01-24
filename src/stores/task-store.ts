import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { mockTodos } from "../utils/mock-todos";
import { changeTodoStatusHelper } from "../utils/misc";
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
        if (state.activeTab === "all") {
          state.todos = changeTodoStatusHelper(get().allTodos, id);
          state.allTodos = state.todos;
        } else if (state.activeTab === "active") {
          state.todos = changeTodoStatusHelper(state.activeTodos, id);
          state.activeTodos = state.todos;
          // all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          // completed todos
          state.completedTodos = changeTodoStatusHelper(
            state.completedTodos,
            id
          );
        } else {
          state.todos = changeTodoStatusHelper(state.completedTodos, id);

          state.completedTodos = state.todos;
          // all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          // active todos
          state.activeTodos = changeTodoStatusHelper(state.activeTodos, id);
        }
      });
      get().updateActive();
    },
    updateActive: () => {
      set((state) => {
        const activeTodos = state.allTodos.reduce((acc, item) => {
          if (item.complete === false) {
            return acc + 1;
          }
          return acc;
        }, 0);
        state.active = activeTodos;
      });
    },
    getAllTodos: (): void => {
      set((state) => {
        state.todos = state.allTodos;
        state.activeTab = "all";
      });
    },
    getActiveTodos: (): void => {
      set((state) => {
        const activeTodos = state.allTodos.filter((todo) => {
          return todo.complete === false;
        });
        state.activeTodos = activeTodos;
        state.todos = state.activeTodos;
        state.activeTab = "active";
      });
    },
    getComletedTodos: (): void => {
      set((state) => {
        const completedTodos = state.allTodos.filter((todo) => {
          return todo.complete === true;
        });
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
