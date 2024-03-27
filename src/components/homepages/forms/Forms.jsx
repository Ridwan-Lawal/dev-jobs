import { useJobs } from "../../../contexts/AppContext";
import { IoSearch } from "react-icons/io5";

import Button from "../Button";
import FilterByLocationDesktop from "./FilterByLocationDesktop";
import IconFilter from "../../IconFilter";
import FilterByLocationMobile from "./FilterByLocationMobile";

function Forms() {
  const { isDark, filterByTitle, dispatch } = useJobs();

  return (
    <div className="px-8">
      <FilterByLocationMobile />
      <form
        className={`shadow-lg transition-all duration-1000 rounded-lg  pr-4 pl-2 md:px-3  flex justify-between ${
          isDark ? "bg-gray-800 shadow-gray-900" : "bg-white shadow-gray-200"
        }  gap-6 items-center -mt-10   max-w-6xl mx-auto`}
      >
        {/* filter by title */}
        <div className="w-full md:w-[45%] flex py-5 md:py-0  items-center">
          <IoSearch className="text-2xl w-[20%] text-violet hidden md:block" />
          <input
            type="text"
            value={filterByTitle}
            onChange={(e) =>
              dispatch({ type: "filterByTitleChange", payload: e.target.value })
            }
            placeholder="Filter by title..."
            className={`w-[80%] focus:outline-none  md:w-[80%] placeholder:text-[15px] bg-inherit text-text-header  py-1.5 px-4 ${
              isDark ? "text-white" : "text-text-heading "
            } `}
          />
        </div>
        {/* end of filter by title */}

        {/* filter by location and fulltime Desktop view  */}
        <FilterByLocationDesktop />
        {/* end of filter by location and fulltime */}

        <p
          onClick={() => dispatch({ type: "filterByLocationMobileView" })}
          className="md:hidden cursor-pointer"
        >
          <IconFilter />
        </p>

        <Button>
          <IoSearch className="text-2xl md:hidden" />
          <p className="hidden md:block">Search</p>
        </Button>
      </form>
    </div>
  );
}

export default Forms;
