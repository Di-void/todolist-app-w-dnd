import { useEffect } from "react";
import Footer from "./Footer";
import ListItem from "./ListItem";
import { useTaskStore } from "../../../stores/task-store";
import ActiveList from "./lists/ActiveList";
import CompletedList from "./lists/CompletedList";

const TodoList = () => {
  const activeTab = useTaskStore((state) => state.activeTab);
  const todos = useTaskStore((state) => state.todos);
  const setTodoStatus = useTaskStore((state) => state.setTodoStatus);
  const active = useTaskStore((state) => state.active);
  const updateActive = useTaskStore((state) => state.updateActive);
  useEffect(() => {
    updateActive();
  }, []);
  console.log(todos);
  // console.log(activeTab);

  return (
    <article className="bg-elem-light dark:bg-elem-dark-1 mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light dark:shadow-black">
      {/* conditional rendering */}

      {
        <ul className="flex flex-col-reverse">
          {activeTab === "active" ? (
            <ActiveList setTodoStatus={setTodoStatus} todos={todos} />
          ) : activeTab === "completed" ? (
            <CompletedList todos={todos} setTodoStatus={setTodoStatus} />
          ) : (
            todos.map(({ id, todo, complete }) => {
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
            })
          )}
        </ul>
      }

      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer active={active} />
    </article>
  );
};

export default TodoList;
