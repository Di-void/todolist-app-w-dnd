import { Todo } from "../../../types/todo";

interface ListItemProps {
  todo: Todo["todo"];
}

const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  return (
    <div className="flex items-center gap-x-4 px-4 py-4 group">
      <div className="rounded-full relative">
        <input type="checkbox" className="checkbox peer/check" />
        <div className="w-[25px] h-[25px] border border-gray-500 absolute top-0 rounded-full z-0 peer-checked/check:bg-gradient-to-r from-grad-color-1 to-grad-color-2">
          &nbsp;
        </div>
      </div>
      <p className="basis-4/5 text-shadow-dark peer-checked/check:line-through">
        {todo}
      </p>
      <button className="text-light-txt-2 basis-1/12 flex place-content-center opacity-0 group-hover:opacity-100 transition-all duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListItem;
