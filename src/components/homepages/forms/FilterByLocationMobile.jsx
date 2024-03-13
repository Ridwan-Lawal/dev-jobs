import { FaCheck, FaLocationDot } from "react-icons/fa6";
import Button from "../Button";
import { useContext } from "react";
import AppContext from "../../AppContext";

function FilterByLocationMobile() {
  const { isDark } = useContext(AppContext);

  return (
    <div className="fixed w-screen left-0 bg-black h-screen top-0 flex items-center justify-center bg-opacity-50 px-8">
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
          <p className={` bg-violet p-0.5 rounded-sm`}>
            <FaCheck className="text-xl p-[2px] font-semibold text-white" />
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
    </div>
  );
}

export default FilterByLocationMobile;
