export type Status = "complete" | "active";

export type statusLookUp = {
  [k in Status]: boolean;
};

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
  // getAllTodos: () => Todo[];
  getActiveTodos: () => void;
  getComletedTodos: () => Todo[];
  deleteCompletedTodos: () => void;
  addTodo: (payload: Input) => void;
  deleteTodo: (id: Todo["id"]) => void;
  setTodoStatus: (id: Todo["id"]) => void;
};
// actions = getActive, getCompleted, getAll
// deleteCompleted, setTodoStatus, deleteTodo
