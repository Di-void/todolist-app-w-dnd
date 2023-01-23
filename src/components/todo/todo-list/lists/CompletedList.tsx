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
          <li
            key={id}
            className="border-b border-shadow-light dark:border-dark-txt-1"
          >
            <ListItem
              id={id}
              todo={todo}
              complete={complete}
              setTodoStatus={setTodoStatus}
            />
          </li>
        );
      })}
    </>
  );
};

export default ActiveList;
