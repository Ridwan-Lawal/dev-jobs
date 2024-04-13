/* eslint-disable react/prop-types */
import { RxDotFilled } from "react-icons/rx";
import { useJobs } from "../../contexts/AppContext";

import CompanyLogo from "./CompanyLogo";

function JobRoleCard({ jobRole }) {
  const { isDark } = useJobs();

  console.log(jobRole.logo);

  return (
    <div
      className={` px-8 py-8 rounded-lg shadow-xl transition-all duration-1000 ${
        isDark ? "bg-gray-800 shadow-gray-900" : "bg-white shadow-gray-300"
      } h-[250px] `}
    >
      <CompanyLogo bgColor={jobRole?.logoBackground}>
        <img src={`/public/${jobRole.logo.slice(2)}`} alt="my image" />
      </CompanyLogo>

      <div className="mt-6">
        <p className="flex gap-2 items-center text-gray-400">
          <span>{jobRole?.postedAt}</span>
          <RxDotFilled className="text-xs" />
          <span>{jobRole?.contract}</span>
        </p>
        <p
          className={`${
            isDark ? "text-white" : "text-text-heading"
          } text-xl font-bold mt-3 `}
        >
          {jobRole?.position}
        </p>
        <p className="text-gray-400 mt-3">{jobRole?.company}</p>
        <p className="mt-8 text-violet">{jobRole?.location}</p>
      </div>
    </div>
  );
}

export default JobRoleCard;
