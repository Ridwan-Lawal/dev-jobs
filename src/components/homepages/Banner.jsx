import { IoMoon, IoSunnySharp } from "react-icons/io5";
import AppContext from "../AppContext";
import { useContext } from "react";

function Banner() {
  const { isDark, dispatch } = useContext(AppContext);

  return (
    <header className="border border-black bg-header-pattern-mobile tablet:bg-header-pattern-tablet laptop:bg-header-pattern-desktop bg-no-repeat bg-cover tablet:h-[180px]   h-[150px] pt-4 px-8">
      <nav className="flex items-center justify-between  max-w-6xl mx-auto">
        <h1 className="text-white text-[31px] font-bold">Devjobs</h1>

        <div className="flex gap-2.5">
          <button>
            <IoSunnySharp className="text-white text-xl" />
          </button>

          <form
            className="border w-fit cursor-pointer  bg-white flex gap-4 p-[2px] rounded-full"
            onClick={() => dispatch({ type: "themeSwitch" })}
          >
            <input
              type="radio"
              name="theme"
              className={`radio bg-violet ${
                !isDark ? "opacity-100" : "opacity-0"
              }`}
            />
            <input
              type="radio"
              name="theme"
              className={`radio bg-violet ${
                isDark ? "opacity-100" : "opacity-0"
              }`}
            />
          </form>

          <button>
            <IoMoon className="text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Banner;
