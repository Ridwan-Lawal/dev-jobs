/* eslint-disable react/prop-types */
import { IoMoon, IoSunnySharp } from "react-icons/io5";
import AppContext from "../AppContext";
import { useContext } from "react";

function Banner({ navIsFixed, onClick }) {
  const { isDark, dispatch } = useContext(AppContext);

  return (
    <header className="border border-black bg-header-pattern-mobile tablet:bg-header-pattern-tablet laptop:bg-header-pattern-desktop bg-no-repeat bg-cover tablet:h-[180px]   h-[150px]  ">
      <nav
        className={`flex ${
          navIsFixed && "mt-0 top-0 fixed w-screen py-4  shadow-2xl"
        } ${navIsFixed && isDark && "bg-slate-900"} ${
          navIsFixed && !isDark && "bg-white"
        } ${
          !navIsFixed && "mt-4"
        } px-8 items-center transition-all duration-450 justify-between  max-w-6xl mx-auto`}
      >
        <h1
          onClick={onClick}
          className={`text-white ${
            navIsFixed && !isDark && "text-gray-800"
          } cursor-pointer text-[31px] font-bold`}
        >
          Devjobs
        </h1>

        <div className="flex gap-2.5">
          <button>
            <IoSunnySharp
              className={`${navIsFixed && !isDark && "text-gray-700"} ${
                navIsFixed && isDark && "text-white"
              } ${!navIsFixed && "text-white"} text-xl`}
            />
          </button>

          <form
            className={`border w-fit ${
              navIsFixed && !isDark && "bg-gray-700"
            } cursor-pointer bg-white flex gap-4 p-[2px] rounded-full`}
            onClick={() => dispatch({ type: "themeSwitch" })}
          >
            <input
              type="radio"
              name="theme"
              className={`radio bg-violet ${
                navIsFixed && !isDark && "bg-white"
              } ${!isDark ? "opacity-100" : "opacity-0"}`}
            />
            <input
              type="radio"
              name="theme"
              className={`radio bg-violet ${
                navIsFixed && !isDark && "bg-white"
              } ${isDark ? "opacity-100" : "opacity-0"}`}
            />
          </form>

          <button>
            <IoMoon
              className={`${navIsFixed && !isDark && "text-gray-700"} ${
                navIsFixed && isDark && "text-white"
              } ${!navIsFixed && "text-white"} text-xl`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Banner;
