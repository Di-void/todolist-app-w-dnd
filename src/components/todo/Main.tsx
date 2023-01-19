import Navbar from "./nav";
import Input from "./input/Input";
import TodoList from "./todo-list/TodoList";
import Tabs from "./todo-list/Tabs";

const Main = () => {
  return (
    <section className="relative -mt-[11rem] mx-auto w-[90vw]">
      <Navbar />
      <Input />
      <TodoList />
      <Tabs />
      <footer className="mx-auto w-fit mt-6">
        <p className="text-light-txt-1">Drag and drop to reorder list</p>
      </footer>
    </section>
  );
};

export default Main;
