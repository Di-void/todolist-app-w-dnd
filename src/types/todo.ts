type Status = "complete" | "active";

export interface Todo {
  id: string;
  todo: string;
  status: Status;
}
