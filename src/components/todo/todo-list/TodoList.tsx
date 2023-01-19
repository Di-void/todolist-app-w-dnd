import { todos } from "../../../utils/mock-todos";
import Footer from "./Footer";

const TodoList = () => {
  return (
    <article className="bg-elem-light mt-5 rounded-md px-4 py-2">
      <ul>
        <li>Todo List Item</li>
      </ul>
      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer />
    </article>
  );
};

export default TodoList;
