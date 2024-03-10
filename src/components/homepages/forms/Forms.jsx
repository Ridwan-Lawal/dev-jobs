import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import FilterByLocationDesktop from "./FilterByLocationDesktop";

// import FilterByLocationMobile from "./FilterByLocationMobile";

function Forms() {
  return (
    <div className="px-8">
      {/* <FilterByLocationMobile /> */}
      <form className="shadow-lg rounded-lg shadow-gray-200 pr-4 pl-2 md:px-3  flex justify-between gap-6 items-center -mt-10  bg-white max-w-6xl mx-auto">
        {/* filter by title */}
        <div className="w-full md:w-[25%] flex py-5 md:py-0  items-center">
          <IoSearch className="text-2xl w-[20%] text-violet hidden md:block" />
          <input
            type="text"
            placeholder="Filter by title..."
            className="w-[80%] focus:outline-none  md:w-[80%] placeholder:text-[15px] text-red-500 text-text-header  py-1.5 px-4 "
          />
        </div>
        {/* end of filter by title */}

        {/* filter by location and fulltime Desktop view  */}
        <FilterByLocationDesktop />
        {/* end of filter by location and fulltime */}

        <section className="border ">
          <img src="/src/assets/mobile/icon-filter.svg" alt="" />
        </section>

        <Button>
          <IoSearch className="text-2xl md:hidden" />
          <p className="hidden md:block">Search</p>
        </Button>
      </form>
    </div>
  );
}

export default Forms;
