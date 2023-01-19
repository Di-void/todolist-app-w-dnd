const Input = () => {
  return (
    <form className="px-4 py-2 mt-8 bg-elem-light flex items-center gap-x-3 rounded-md">
      {/* checkbox */}
      <div className="rounded-full relative">
        <input type="checkbox" className="checkbox peer" />
        <div className="w-[25px] h-[25px] border border-gray-500 absolute top-0 rounded-full z-0 peer-checked:bg-gradient-to-r from-grad-color-1 to-grad-color-2">
          &nbsp;
        </div>
      </div>
      {/* end checkbox */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="border-none focus:ring-0 w-full px-0 py-2"
        />
      </div>
    </form>
  );
};

export default Input;
