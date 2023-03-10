import Navbar from "./nav";
import Input from "./input/Input";
import TodoList from "./todo-list/TodoList";
import Tabs from "./todo-list/Tabs";

const Main = () => {
  return (
    <section className="relative -mt-[11rem] mx-auto w-[90vw] max-w-2xl">
      <Navbar />
      <Input />
      <TodoList />
      <Tabs />
      <footer className="mx-auto w-fit mt-6">
        <p className="text-shadow-light dark:text-light-txt-2">
          Drag and drop to reorder list
        </p>
      </footer>
    </section>
  );
};

export default Main;
