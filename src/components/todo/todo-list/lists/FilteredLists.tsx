import { Todo } from "../../../../types/todo";
import ListItem from "../ListItem";
import SortableWrapper from "../../../../utils/SortableWrapper";
interface ListProps {
  todos: Todo[];
  setTodoStatus: (id: Todo["id"]) => void;
}

const FilteredLists = ({ setTodoStatus, todos }: ListProps) => {
  return (
    <SortableWrapper items={todos}>
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
    </SortableWrapper>
  );
};

export default FilteredLists;
