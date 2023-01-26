import { Todo } from "../../../types/todo";
import clsx from "clsx";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTaskStore } from "../../../stores/task-store";

interface ListItemProps {
  id: Todo["id"];
  todo: Todo["todo"];
  complete: Todo["complete"];
  setTodoStatus: (id: Todo["id"]) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  todo,
  complete,
  setTodoStatus,
}) => {
  const deleteTodo = useTaskStore((state) => state.deleteTodo);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChange = () => {
    setTodoStatus(id);
  };

  return (
    <li
      className="border-b border-shadow-light dark:border-dark-txt-1 bg-elem-light dark:bg-elem-dark-1"
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
    >
      <div className="flex items-center gap-x-4 px-4 py-4 group">
        <div
          className="rounded-full relative"
          title={complete ? "Mark as active" : "Mark as complete"}
        >
          <input
            type="checkbox"
            className="checkbox peer"
            checked={complete}
            onChange={handleChange}
          />
          <div className="w-[25px] h-[25px] border border-gray-500 absolute top-0 rounded-full z-0 peer-checked:border-none peer-checked:bg-gradient-to-r from-grad-color-1 to-grad-color-2">
            &nbsp;
          </div>
        </div>
        <p
          className={clsx(
            "basis-4/5 text-shadow-dark dark:text-light-txt-1",
            complete && "line-through text-dark-txt-1 dark:text-light-txt-4"
          )}
          title={todo}
        >
          {todo}
        </p>
        <button
          className="text-light-txt-2 dark:text-light-txt-1 basis-1/12 flex place-content-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-150"
          title="Delete Todo"
          onClick={() => deleteTodo(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
