import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ReactNode } from "react";
import { Todo } from "../types/todo";

interface SortableWrapperProps {
  items: Todo[];
  children: ReactNode;
}

// Single Instance of Sortable Context - Pass around

const SortableWrapper = ({ items, children }: SortableWrapperProps) => {
  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      {children}
    </SortableContext>
  );
};

export default SortableWrapper;
