import { Todo } from "../../../../types/todo";
import ListItem from "../ListItem";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface ListProps {
  todos: Todo[];
  setTodoStatus: (id: Todo["id"]) => void;
}

const ActiveList = ({ setTodoStatus, todos }: ListProps) => {
  return (
    <SortableContext strategy={verticalListSortingStrategy} items={todos}>
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
    </SortableContext>
  );
};

export default ActiveList;
