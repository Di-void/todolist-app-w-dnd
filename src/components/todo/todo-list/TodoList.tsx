import { useEffect } from "react";
import Footer from "./Footer";
import ListItem from "./ListItem";
import { useTaskStore } from "../../../stores/task-store";
import ActiveList from "./lists/ActiveList";
import CompletedList from "./lists/CompletedList";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

//
const TodoList = () => {
  const activeTab = useTaskStore((state) => state.activeTab);
  const todos = useTaskStore((state) => state.todos);
  const setTodoStatus = useTaskStore((state) => state.setTodoStatus);
  const active = useTaskStore((state) => state.active);
  const updateActive = useTaskStore((state) => state.updateActive);
  useEffect(() => {
    updateActive();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over!.id);
  };

  console.log(todos);

  return (
    <article className="bg-elem-light dark:bg-elem-dark-1 mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light dark:shadow-black">
      {
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement]}
          onDragEnd={handleDragEnd}
        >
          <ul className="flex flex-col-reverse bg-elem-light dark:bg-elem-dark-1">
            {activeTab === "active" ? (
              <ActiveList setTodoStatus={setTodoStatus} todos={todos} />
            ) : activeTab === "completed" ? (
              <CompletedList todos={todos} setTodoStatus={setTodoStatus} />
            ) : (
              <SortableContext
                items={todos}
                strategy={verticalListSortingStrategy}
              >
                {todos.map(({ id, todo, complete }) => {
                  return (
                    <ListItem
                      key={id}
                      id={id}
                      todo={todo}
                      complete={complete}
                      setTodoStatus={setTodoStatus}
                    />
                  );
                })}
              </SortableContext>
            )}
          </ul>
        </DndContext>
      }

      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer active={active} />
    </article>
  );
};

export default TodoList;
