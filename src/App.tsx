import { BgImage, Main } from "./components";

function App() {
  return (
    <main className="min-h-screen bg-light relative dark:bg-dark">
      <BgImage />
      <Main />
      <div className="text-xs w-fit mt-9 mx-auto text-center md:text-sm text-light-txt-4 dark:text-light-txt-2">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-dark dark:text-active-blue"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/Multimarix"
          className="text-dark dark:text-active-blue"
          target="_blank"
        >
          Dee
        </a>
        .
      </div>
    </main>
  );
}

export default App;
