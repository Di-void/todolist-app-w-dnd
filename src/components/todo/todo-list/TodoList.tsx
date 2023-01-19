import { todos } from "../../../utils/mock-todos";
import Footer from "./Footer";
import ListItem from "./ListItem";

const TodoList = () => {
  return (
    <article className="bg-elem-light mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light">
      <ul className="divide-y divide-shadow-light">
        {todos.map(({ id, todo }) => {
          return (
            <li key={id}>
              <ListItem todo={todo} />
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
