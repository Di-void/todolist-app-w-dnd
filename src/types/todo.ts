export type Status = boolean;

export interface Todo {
  id: string;
  todo: string;
  complete: Status;
}

export type Input = Omit<Todo, "id">;

export type State = {
  todos: Todo[];
  allTodos: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
  activeTab: "all" | "active" | "completed";
  active: number;
};

export type Actions = {
  getAllTodos: () => void;
  getActiveTodos: () => void;
  getComletedTodos: () => void;
  deleteCompletedTodos: () => void;
  addTodo: (payload: Input) => void;
  deleteTodo: (id: Todo["id"]) => void;
  setTodoStatus: (id: Todo["id"]) => void;
  updateActive: () => void;
};
// actions = getActive, getCompleted, getAll
// deleteCompleted, setTodoStatus, deleteTodo
