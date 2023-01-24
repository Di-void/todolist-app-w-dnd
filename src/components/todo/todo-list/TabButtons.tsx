import { useState } from "react";
import clsx from "clsx";
import { useTaskStore } from "../../../stores/task-store";
const btns = ["all", "active", "completed"] as const;
type Tabs = "all" | "active" | "completed";

const TabButtons = () => {
  const [value, setValue] = useState(0);
  const getAllTodos = useTaskStore((state) => state.getAllTodos);
  const getActiveTodos = useTaskStore((state) => state.getActiveTodos);
  const getCompletedTodos = useTaskStore((state) => state.getComletedTodos);
  const handleChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const value = e.currentTarget.dataset.id as Tabs;
<<<<<<< HEAD
=======
    console.log(value);

>>>>>>> b9c94c1c08dc6f9306f5a3d5f5837cae5f89777d
    if (value === "active") {
      getActiveTodos();
    }
    if (value === "completed") {
      getCompletedTodos();
    }
    if (value === "all") {
      getAllTodos();
    }
<<<<<<< HEAD
=======

>>>>>>> b9c94c1c08dc6f9306f5a3d5f5837cae5f89777d
    setValue(index);
  };
  return (
    <>
      {btns.map((item, index) => (
        <button
          key={index}
          data-id={item}
          className={clsx(
            "capitalize text-light-txt-4 dark:text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150 font-semibold",
            index === value &&
              "text-active-blue dark:text-active-blue hover:text-active-blue dark:hover:text-active-blue"
          )}
          onClick={(e) => handleChange(e, index)}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default TabButtons;
