import { useContext } from "react";
import Button from "../Button";
import AppContext from "../../AppContext";

/* eslint-disable react/prop-types */
function JobDetailsFooter({
  companyName = "Scoot",
  location = "United Kingdom",
}) {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={`transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className=" flex flex-row items-center justify-between mt-20  py-6 px-8 max-w-3xl mx-auto">
        <section className="space-y-1">
          <h2
            className={`${
              isDark ? "text-white" : " text-text-heading"
            } text-2xl  font-bold `}
          >
            {companyName}
          </h2>
          <p className={`${isDark ? "text-grey-light" : "text-grey-medium "}`}>
            {location}
          </p>
        </section>

        <Button textColor="font-semibold text-white">Apply now</Button>
      </div>
    </div>
  );
}

export default JobDetailsFooter;
