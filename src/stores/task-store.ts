import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  changeTodoStatusHelper,
  deleteTodoHelper,
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
        if (state.activeTab === "all") {
          state.todos = state.allTodos;
        } else if (state.activeTab === "active") {
          state.todos = getTodos(state.allTodos, "active");
        } else {
          state.todos = getTodos(state.allTodos, "completed");
        }
      });
      get().updateActive();
    },
    setTodoStatus: (id: string): void => {
      set((state) => {
        if (state.activeTab === "all") {
          // ! Todo => line (46) and similar may be unnecessary overhead.
          // !         We may not need a separate activeTodos or completedTodos
          // !         to be passed as a parameter to this helper because of
          // !         because of the existence of the getTodos helper func
          state.todos = changeTodoStatusHelper(get().allTodos, id);
          state.allTodos = state.todos;
        } else if (state.activeTab === "active") {
          state.activeTodos = changeTodoStatusHelper(state.activeTodos, id);
          state.todos = state.activeTodos.filter((todo) => {
            return todo.complete === false;
          });

          // update all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          // update completed todos
          state.completedTodos = changeTodoStatusHelper(
            state.completedTodos,
            id
          );
        } else {
          state.completedTodos = changeTodoStatusHelper(
            state.completedTodos,
            id
          );
          state.todos = state.completedTodos.filter((todo) => {
            return todo.complete === true;
          });

          // update all todos
          state.allTodos = changeTodoStatusHelper(state.allTodos, id);
          // update active todos
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
    setActiveTodos: (): void => {
      set((state) => {
        const activeTodos = getTodos(state.allTodos, "active");
        // ! Todo => line (95) may be unnecessary overhead.
        // !         We may not need an activeTodos array stored
        // !         separately because of helper function
        state.activeTodos = activeTodos;
        state.todos = state.activeTodos;
        state.activeTab = "active";
      });
    },
    setComletedTodos: (): void => {
      set((state) => {
        const completedTodos = getTodos(state.allTodos, "completed");
        // ! Todo => line (95) may be unnecessary overhead.
        // !         We may not need an completedTodos array stored
        // !         separately because of helper function
        state.completedTodos = completedTodos;
        state.todos = state.completedTodos;
        state.activeTab = "completed";
      });
    },
    deleteTodo: (id: string): void => {
      set((state) => {
        if (state.activeTab === "all") {
          state.todos = deleteTodoHelper(state.todos, id);
          state.allTodos = state.todos;
        } else if (state.activeTab === "active") {
          state.activeTodos = deleteTodoHelper(state.activeTodos, id);
          state.todos = state.activeTodos;

          // update all todos
          state.allTodos = deleteTodoHelper(state.allTodos, id);
          // update completed todos
          state.completedTodos = deleteTodoHelper(state.completedTodos, id);
        } else {
          state.completedTodos = deleteTodoHelper(state.completedTodos, id);
          state.todos = state.completedTodos;

          // update all todos
          state.allTodos = deleteTodoHelper(state.allTodos, id);
          // update active todos
          state.activeTodos = deleteTodoHelper(state.activeTodos, id);
        }
      });
      get().updateActive();
    },
    deleteCompletedTodos: (): void => {
      set((state) => {
        state.todos = state.todos.filter((item) => {
          return item.complete === false;
        });
        state.allTodos = state.allTodos.filter((item) => {
          return item.complete === false;
        });
        state.completedTodos = state.completedTodos.filter((item) => {
          return item.complete === false;
        });
      });
      get().updateActive();
    },
  }))
);
