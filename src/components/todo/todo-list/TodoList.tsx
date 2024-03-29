import { useEffect } from "react";
import Footer from "./Footer";
import ListItem from "./ListItem";
import { useTaskStore } from "@/stores/task-store";
import FilteredLists from "./lists/FilteredLists";
import SortableWrapper from "@/utils/SortableWrapper";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { findTodoIndex } from "@/utils/misc";

//
const TodoList = () => {
  const activeTab = useTaskStore((state) => state.activeTab);
  const todos = useTaskStore((state) => state.todos);
  const setTodoStatus = useTaskStore((state) => state.setTodoStatus);
  const active = useTaskStore((state) => state.active);
  const reArrangeTodos = useTaskStore((state) => state.reArrangeTodos);
  const updateActive = useTaskStore((state) => state.updateActive);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  useEffect(() => {
    updateActive();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over!.id) {
      const activeIndex = findTodoIndex(todos, active.id as string);
      const overIndex = findTodoIndex(todos, over!.id as string);
      reArrangeTodos(arrayMove(todos, activeIndex, overIndex));
    }
  };

  // console.log(todos);

  return (
    <div className="bg-elem-light dark:bg-elem-dark-1 mt-5 mb-5 rounded-md shadow-2xl shadow-shadow-light dark:shadow-black overflow-hidden">
      {
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement]}
          onDragEnd={handleDragEnd}
        >
          <ul className="flex flex-col-reverse bg-elem-light dark:bg-elem-dark-1 overflow-auto">
            {activeTab === "active" ? (
              <FilteredLists setTodoStatus={setTodoStatus} todos={todos} />
            ) : activeTab === "completed" ? (
              <FilteredLists todos={todos} setTodoStatus={setTodoStatus} />
            ) : (
              <SortableWrapper items={todos}>
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
              </SortableWrapper>
            )}
          </ul>
        </DndContext>
      }

      {/* FOOTER (DISPLAY ITEMS INFO) */}
      <Footer active={active} />
    </div>
  );
};

export default TodoList;
