import { Link } from "react-router-dom";

import Button from "../Button";
import { useJobs } from "../../../contexts/AppContext";

/* eslint-disable react/prop-types */
function JobDetailsFooter({
  companyName = "Scoot",
  location = "United Kingdom",
  role,
}) {
  const { isDark } = useJobs();
  return (
    <div
      className={`transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className=" flex flex-row items-center justify-between mt-20 gap-3  py-6 px-8 max-w-3xl mx-auto">
        <section className="space-y-1">
          <h2
            className={`${
              isDark ? "text-white" : " text-text-heading"
            } text-xl sm:text-2xl  font-bold `}
          >
            {companyName}
          </h2>
          <p className={`${isDark ? "text-grey-light" : "text-grey-medium "}`}>
            {location}
          </p>
        </section>

        <Link to={`/jobapplication/${companyName}?position=${role}`}>
          <Button textColor="font-semibold text-white">Apply now</Button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetailsFooter;
