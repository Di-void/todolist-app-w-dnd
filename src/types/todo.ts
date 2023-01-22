export type Status = boolean;

export interface Todo {
  id: string;
  todo: string;
  complete: Status;
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
