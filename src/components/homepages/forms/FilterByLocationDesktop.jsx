import { FaCheck, FaLocationDot } from "react-icons/fa6";

function FilterByLocationDesktop() {
  return (
    <>
      <div className=" items-center md:w-[25%] py-5 hidden px-4  border-x hidden md:flex bg-white">
        <FaLocationDot className="text-2xl md:text-2xl text-violet" />
        <input
          type="text"
          placeholder="Filter by location..."
          className=" w-full  text-text-header  py-1.5 placeholder:text-[15px] focus:outline-0 px-4 "
        />
      </div>
      {/* end of filter by location */}

      {/* full-time filter */}
      <div className="md:flex  hidden gap-4 items-center  ">
        <p className={` bg-violet flex  items-center p-0.5 rounded-sm`}>
          <FaCheck className="text-xl p-[2px] font-semibold text-white" />
        </p>
        <p className="font-semibold text-text-heading ">Full time only</p>
      </div>

      {/* end of full-time filter */}
    </>
  );
}

export default FilterByLocationDesktop;
