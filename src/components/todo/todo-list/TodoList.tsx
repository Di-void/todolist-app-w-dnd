import { mockTodos } from "../../../utils/mock-todos";
import Footer from "./Footer";
import ListItem from "./ListItem";
import { useTaskStore } from "../../../stores/task-store";

const TodoList = () => {
  const todos = useTaskStore((state) => state.todos);
  console.log(todos);
  return (
    <article className="bg-elem-light dark:bg-elem-dark-1 mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light dark:shadow-black">
      <ul className="divide-y divide-shadow-light dark:divide-dark-txt-1">
        {mockTodos.map(({ id, todo, status }) => {
          return (
            <li key={id}>
              <ListItem todo={todo} status={status} />
            </li>
          );
        })}
      </ul>
      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer />
    </article>
  );
};

export default TodoList;
