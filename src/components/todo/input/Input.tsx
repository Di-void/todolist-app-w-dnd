import { useTaskStore } from "../../../stores/task-store";
import { useState, useRef } from "react";
import type { Input, Status } from "../../../types/todo";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoStatus, setTodoStatus] = useState(false);

  /** `addTodo` action from global store. Not to be confused with the `addNewTodo` function below */
  const addTodo = useTaskStore((state) => state.addTodo);

  const addNewTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      addTodo({
        todo: inputRef.current.value,
        complete: todoStatus,
      });
      inputRef.current.value = "";
      setTodoStatus(false);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoStatus(e.target.checked);
  };
  return (
    <form
      className="px-4 py-2 mt-8 bg-elem-light dark:bg-elem-dark-1 flex items-center gap-x-3 rounded-md"
      onSubmit={addNewTodo}
    >
      {/* checkbox */}
      <div className="rounded-full relative">
        <input
          type="checkbox"
          className="checkbox peer"
          checked={todoStatus}
          onChange={handleStatusChange}
        />
        <div className="w-[25px] h-[25px] border border-gray-500 absolute top-0 rounded-full z-0 peer-checked:bg-gradient-to-r from-grad-color-1 to-grad-color-2">
          &nbsp;
        </div>
      </div>
      {/* end checkbox */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="border-none focus:ring-0 w-full px-0 py-2 dark:bg-elem-dark-1 dark:placeholder:text-shadow-light dark:caret-active-blue text-shadow-dark dark:text-light-txt-1"
          ref={inputRef}
        />
      </div>
    </form>
  );
};

export default Input;
