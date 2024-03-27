import { FaCheck, FaLocationDot } from "react-icons/fa6";
import { useJobs } from "../../../contexts/AppContext";
import { RxCross1 } from "react-icons/rx";

import Button from "../Button";

function FilterByLocationMobile() {
  const {
    isDark,
    dispatch,
    fullTimeFilter,
    filterByLocation,
    isFilterByLocationMobileOpen,
  } = useJobs();

  return (
    <div
      className={` fixed w-screen left-0 bg-black h-screen md:hidden ${
        isFilterByLocationMobileOpen ? "opacity-100 z-50" : "opacity-0 -z-50"
      } transition-opacity duration-400 top-0 flex flex-col items-center justify-center bg-opacity-50 px-8 gap-7`}
    >
      <div
        className={`${
          isDark ? "bg-grey-ultradark" : "bg-white"
        } w-full shadow-lg rounded-lg  pb-5 px-4`}
      >
        {/* filter by location */}
        <div className="flex items-center bg-inherit py-4">
          <FaLocationDot className="text-2xl md:text-2xl text-violet" />
          <input
            type="text"
            value={filterByLocation}
            onChange={(e) =>
              dispatch({
                type: "filterByLocationChange",
                payload: e.target.value,
              })
            }
            placeholder="Filter by location..."
            className={`w-full ${
              isDark ? "text-white" : "text-text-header"
            } bg-inherit focus:outline-none  py-1.5 placeholder:text-[15px] px-4`}
          />
        </div>

        {/* fulltime filtering */}
        <div
          className={`flex gap-4 ${
            isDark && "border-gray-600"
          } border-t py-4 mb-2`}
        >
          <p
            onClick={() => dispatch({ type: "fullTimeFilterClick" })}
            className={`${
              fullTimeFilter
                ? "p-0.5 bg-violet"
                : isDark
                ? "p-3 bg-gray-700"
                : "p-3 bg-gray-200"
            } cursor-pointer rounded-sm`}
          >
            {fullTimeFilter && (
              <FaCheck className="text-xl p-[2px] font-semibold text-white" />
            )}
          </p>
          <p
            className={`font-semibold  ${
              isDark ? "text-white" : "text-text-heading"
            } `}
          >
            Full time only
          </p>
        </div>

        {/* search button */}
        <Button width="w-full">Search</Button>
      </div>

      <section
        onClick={() => dispatch({ type: "filterByLocationMobileView" })}
        className="mt-8 cursor-pointer p-2 rounded-full shadow-xs border-[2px] shadow-white"
      >
        <RxCross1 className="text-white text-xl" />
      </section>
    </div>
  );
}

export default FilterByLocationMobile;
