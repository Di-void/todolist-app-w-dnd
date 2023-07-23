import { useState } from "react";
import clsx from "clsx";
import { useTaskStore } from "@/stores/task-store";
import type { Tabs } from "@/types/todo";
const btns = ["all", "active", "completed"] as const;

const TabButtons = () => {
  const [value, setValue] = useState(0);
  const getAllTodos = useTaskStore((state) => state.getAllTodos);
  const setActiveTodos = useTaskStore((state) => state.setActiveTodos);
  const setCompletedTodos = useTaskStore((state) => state.setComletedTodos);
  const handleChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const value = e.currentTarget.dataset.id as Tabs;

    if (value === "active") {
      setActiveTodos();
    }
    if (value === "completed") {
      setCompletedTodos();
    }
    if (value === "all") {
      getAllTodos();
    }
    setValue(index);
  };
  return (
    <>
      {btns.map((item, index) => (
        <button
          key={index}
          data-id={item}
          title={`${item} todos`}
          className={clsx(
            index === value &&
              "text-active-blue hover:text-active-blue dark:hover:text-active-blue",
            "capitalize text-light-txt-4  hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150 font-semibold"
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
