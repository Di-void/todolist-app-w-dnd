//

const Tabs = () => {
  return (
    <footer className="bg-elem-light dark:bg-elem-dark-1 rounded-md px-4 py-4 flex gap-x-4 place-content-center">
      <button className="capitalize text-light-txt-4 dark:text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150 font-semibold">
        all
      </button>
      <button className="capitalize text-light-txt-4 dark:text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150 font-semibold">
        active
      </button>
      <button className="capitalize text-light-txt-4 dark:text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150 font-semibold">
        completed
      </button>
    </footer>
  );
};

export default Tabs;
