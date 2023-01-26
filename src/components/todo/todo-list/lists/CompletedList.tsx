import { Todo } from "../../../../types/todo";
import ListItem from "../ListItem";

interface ListProps {
  todos: Todo[];
  setTodoStatus: (id: Todo["id"]) => void;
}

const ActiveList = ({ setTodoStatus, todos }: ListProps) => {
  return (
    <>
      {todos.map(({ id, todo, complete }) => {
        return (
          <ListItem
            id={id}
            todo={todo}
            complete={complete}
            setTodoStatus={setTodoStatus}
          />
        );
      })}
    </>
  );
};

export default ActiveList;
