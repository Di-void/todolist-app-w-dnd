import Navbar from "./nav";
import Input from "./input/Input";
import TodoList from "./todo-list/TodoList";

const Main = () => {
  return (
    <section className="relative -mt-[11rem] mx-auto w-[90vw] max-w-2xl min-h-[80vh]">
      <Navbar />
      <Input />
      <TodoList />
    </section>
  );
};

export default Main;
