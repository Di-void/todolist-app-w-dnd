import { useEffect } from "react";
import Footer from "./Footer";
import ListItem from "./ListItem";
import { useTaskStore } from "../../../stores/task-store";

const TodoList = () => {
  const todos = useTaskStore((state) => state.todos);
  const setTodoStatus = useTaskStore((state) => state.setTodoStatus);
  const active = useTaskStore((state) => state.active);
  const updateActive = useTaskStore((state) => state.updateActive);
  useEffect(() => {
    updateActive();
  }, []);
  console.log(todos);
  return (
    <article className="bg-elem-light dark:bg-elem-dark-1 mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light dark:shadow-black">
      <ul className="flex flex-col-reverse">
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
      </ul>
      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer active={active} />
    </article>
  );
};

export default TodoList;
