import { Todo } from "../../../../types/todo";
import ListItem from "../ListItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface ListProps {
  todos: Todo[];
  setTodoStatus: (id: Todo["id"]) => void;
}

const FilteredLists = ({ setTodoStatus, todos }: ListProps) => {
  return (
    <SortableContext strategy={verticalListSortingStrategy} items={todos}>
      {todos.map(({ id, todo, complete }) => {
        return (
          <ListItem
            key={id}
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

export default FilteredLists;
