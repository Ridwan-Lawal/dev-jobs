/* eslint-disable react/prop-types */
import { useJobs } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";

import Button from "../Button";

function JobDetailsHeader({ jobRoleDetails }) {
  const { isDark } = useJobs();

  const style = {
    backgroundColor: jobRoleDetails?.logoBackground,
  };

  console.log(jobRoleDetails);

  return (
    <div
      className={`flex flex-col  tablet:flex-row transition-all duration-1000 rounded-md shadow-lg  -mt-8 tablet:-mt-16  tablet:overflow-hidden  tablet:pr-8  gap-5 items-center tablet:items-stretch ${
        isDark ? "bg-gray-800 shadow-gray-900" : "bg-white shadow-blue-50"
      } `}
    >
      <section
        style={style}
        className={`h-[50px] w-[50px] -mt-6 py-[19px] px-2 tablet:mt-0 rounded-xl  tablet:rounded-none flex items-center tablet:w-[25%] justify-center `}
      >
        <img
          src={`/src/assets/logos/${jobRoleDetails?.company.toLowerCase()}.svg`}
          alt=""
          className="tablet:w-12"
        />
      </section>

      <div className="flex flex-col tablet:flex-row items-center gap-10 tablet:justify-between  tablet:py-10 w-full pb-6 md:pb-10">
        <section
          className={`${
            isDark ? "text-white" : "text-text-heading"
          }  text-center tablet:text-left space-y-3 tablet:space-y-2`}
        >
          <h2 className="text-2xl font-bold">{jobRoleDetails?.company}</h2>

          <p>{`https://${jobRoleDetails?.company.toLowerCase()}.com`}</p>
        </section>

        <Link to={`/jobapplication/${jobRoleDetails?.company}?apply`}>
          <Button
            bgColor={`${
              isDark ? "bg-violet bg-opacity-[10%]" : "bg-violet-ultralight"
            }`}
            width="w-fit hover:scale-105 transition-transform duration-400"
            textColor="text-violet font-bold"
          >
            Company site
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
