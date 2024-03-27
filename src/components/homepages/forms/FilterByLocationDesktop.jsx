import { FaCheck, FaLocationDot } from "react-icons/fa6";
import { useJobs } from "../../../contexts/AppContext";

function FilterByLocationDesktop() {
  const { isDark, fullTimeFilter, dispatch, filterByLocation } = useJobs();

  return (
    <>
      <div
        className={` items-center md:w-[30%] py-5 hidden px-4  border-x ${
          isDark && "border-gray-700"
        } md:flex bg-interit`}
      >
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
          className={` w-full  text-text-header  py-1.5 placeholder:text-[15px] focus:outline-0 px-4 bg-inherit ${
            isDark ? "text-white" : "text-text-heading "
          } `}
        />
      </div>
      {/* end of filter by location */}

      {/* full-time filter */}
      <div className="md:flex  hidden gap-4 items-center w-[30%] ">
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
          className={`font-semibold ${
            isDark ? "text-white" : "text-text-heading"
          } `}
        >
          Full time only
        </p>
      </div>

      {/* end of full-time filter */}
    </>
  );
}

export default FilterByLocationDesktop;
