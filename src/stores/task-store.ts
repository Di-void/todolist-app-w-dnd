import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  changeTodoStatusHelper,
  deleteSingleTodoHelper,
  deleteCompletedTodosHelper,
  getTodos,
} from "../utils/misc";
import type { Actions, State, Input, Todo } from "../types/todo";

export const useTaskStore = create(
  immer<State & Actions>((set, get) => ({
    todos: [],
    allTodos: [],
    activeTodos: [],
    completedTodos: [],
    activeTab: "all",
    active: 0,
    reArrangeTodos: (reArrangedTodos: Todo[]): void => {
      set((state) => {
        if (state.activeTab === "all") {
          state.todos = reArrangedTodos;
          state.allTodos = reArrangedTodos;
        } else if (state.activeTab === "active") {
          state.todos = reArrangedTodos;
          state.activeTodos = reArrangedTodos;
        } else {
          state.todos = reArrangedTodos;
          state.completedTodos = reArrangedTodos;
        }
      });
    },
    addTodo: (payload: Input): void => {
      set((state) => {
        state.allTodos.push({
          id: crypto.randomUUID(),
          ...payload,
        });
        state.activeTodos = getTodos(state.allTodos, "active");
        state.completedTodos = getTodos(state.allTodos, "completed");
        if (state.activeTab === "all") {
          state.todos = state.allTodos;
        } else if (state.activeTab === "active") {
          state.todos = state.activeTodos;
        } else {
          state.todos = state.completedTodos;
        }
      });
      get().updateActive();
    },
    setTodoStatus: (id: string): void => {
      set((state) => {
        if (state.activeTab === "all") {
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          state.todos = state.allTodos;
          state.activeTodos = getTodos(state.allTodos, "active");
          state.completedTodos = getTodos(state.allTodos, "completed");
        } else if (state.activeTab === "active") {
          // update all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          state.activeTodos = changeTodoStatusHelper(
            getTodos(state.allTodos, "active"),
            id,
            "active"
          );
          state.todos = state.activeTodos;

          // update completed todos
          state.completedTodos = getTodos(state.allTodos, "completed");
        } else {
          // update all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          state.completedTodos = changeTodoStatusHelper(
            getTodos(state.allTodos, "completed"),
            id,
            "completed"
          );
          state.todos = state.completedTodos;

          // update active todos
          state.activeTodos = getTodos(state.allTodos, "active");
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
    setActiveTodos: (): void => {
      set((state) => {
        state.todos = state.activeTodos;
        state.activeTab = "active";
      });
    },
    setComletedTodos: (): void => {
      set((state) => {
        state.todos = state.completedTodos;
        state.activeTab = "completed";
      });
    },
    deleteTodo: (id: string): void => {
      set((state) => {
        if (state.activeTab === "all") {
          state.allTodos = deleteSingleTodoHelper(state.todos, id);
          state.activeTodos = getTodos(state.allTodos, "active");
          // state.completedTodos = getTodos(state.allTodos, "active");
          state.todos = state.allTodos;
        } else if (state.activeTab === "active") {
          // update all todos
          state.allTodos = deleteSingleTodoHelper(state.allTodos, id);
          state.activeTodos = getTodos(state.allTodos, "active");
          state.todos = state.activeTodos;

          // update completed todos
          state.completedTodos = getTodos(state.allTodos, "completed");
        } else {
          // update all todos
          state.allTodos = deleteSingleTodoHelper(state.allTodos, id);
          state.completedTodos = getTodos(state.allTodos, "completed");
          state.todos = state.completedTodos;

          // update active todos
          state.activeTodos = getTodos(state.allTodos, "active");
        }
      });
      get().updateActive();
    },
    deleteCompletedTodos: (): void => {
      set((state) => {
        state.allTodos = deleteCompletedTodosHelper(state.allTodos);
        state.todos = deleteCompletedTodosHelper(state.todos);
        state.completedTodos = [];
      });
      get().updateActive();
    },
  }))
);
