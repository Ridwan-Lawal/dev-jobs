/* eslint-disable react/prop-types */

import { useContext } from "react";
import Button from "../Button";
import AppContext from "../../AppContext";

function JobDetailsHeader({
  bgColor = "bg-orange-500",
  companyLink = "https://example.com/scoot",
}) {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`flex flex-col  tablet:flex-row transition-all duration-1000 rounded-md shadow-lg  -mt-8 tablet:-mt-16  tablet:overflow-hidden  tablet:pr-8  gap-5 items-center tablet:items-stretch ${
        isDark ? "bg-gray-800 shadow-gray-900" : "bg-white shadow-blue-50"
      } `}
    >
      <section
        className={`${bgColor} -mt-6 py-[19px] px-2 tablet:mt-0 rounded-xl w-fit tablet:rounded-none flex items-center tablet:w-[25%] justify-center `}
      >
        <img src="/src/assets/logos/scoot.svg" alt="" className="tablet:w-12" />
      </section>

      <div className="flex flex-col tablet:flex-row items-center gap-10 tablet:justify-between  tablet:py-10 w-full pb-6 md:pb-10">
        <section
          className={`${
            isDark ? "text-white" : "text-text-heading"
          }  text-center tablet:text-left space-y-3 tablet:space-y-2`}
        >
          <h2 className="text-2xl font-bold">Scoot</h2>
          <p>{companyLink}</p>
        </section>
        <Button
          bgColor={`${
            isDark ? "bg-violet bg-opacity-[10%]" : "bg-violet-ultralight"
          }`}
          width="w-fit hover:scale-105 transition-transform duration-400"
          textColor="text-violet font-bold"
        >
          Company site
        </Button>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
