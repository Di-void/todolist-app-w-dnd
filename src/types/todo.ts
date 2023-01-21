export type Status = "complete" | "active";

export interface Todo {
  id: string;
  todo: string;
  status: Status;
}

export type Input = Omit<Todo, "id">;

export type State = {
  todos: Todo[];
  active: number;
};

export type Actions = {
  getActiveTodos: () => Todo[];
  getComletedTodos: () => Todo[];
  deleteCompletedTodos: () => void;
  addTodo: (payload: Input) => void;
  deleteTodo: (id: Todo["id"]) => void;
  setTodoStatus: (id: Todo["id"]) => void;
  updateActive: () => void;
};
// actions = getActive, getCompleted, getAll
// deleteCompleted, setTodoStatus, deleteTodo
