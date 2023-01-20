const Footer = () => {
  return (
    <footer className="border-t border-shadow-light px-4 py-4 flex justify-between">
      <h4 className="text-shadow-light">
        {" "}
        <span>5</span> items left
      </h4>

      {/* status tabs (visible from tablet view) */}
      {/*  */}
      {/* end status tabs (visible from tablet view) */}

      <button className="capitalize text-shadow-light hover:text-shadow-dark dark:hover:text-light-txt-1 transition-all duration-150">
        clear completed
      </button>
    </footer>
  );
};

export default Footer;
