export type Status = boolean;

export type Theme = "dark" | "light";

export interface Todo {
  id: string;
  todo: string;
  complete: Status;
}

export type Input = Omit<Todo, "id">;

export type Tabs = "all" | "active" | "completed";

export type State = {
  todos: Todo[];
  allTodos: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
  activeTab: Tabs;
  active: number;
};

export type Actions = {
  getAllTodos: () => void;
  setTempTodos: () => void;
  setActiveTodos: () => void;
  setComletedTodos: () => void;
  deleteCompletedTodos: () => void;
  addTodo: (payload: Input) => void;
  deleteTodo: (id: Todo["id"]) => void;
  setTodoStatus: (id: Todo["id"]) => void;
  updateActive: () => void;
};
