/* eslint-disable react/prop-types */
import { RxDotFilled } from "react-icons/rx";

import CompanyLogo from "./CompanyLogo";

function JobRoleCard({
  timePosted = "5h ago",
  duration = "Full Time",
  role = "Senior Software Engineer",
  company = "Scoot",
  location = "United Kingdom",
}) {
  return (
    <div className=" bg-white px-8 py-8 rounded-lg shadow-xl shadow-gray-300 ">
      <CompanyLogo>
        <img src="/src/assets/logos/scoot.svg" alt="my image" />
      </CompanyLogo>

      <div className="mt-6">
        <p className="flex gap-2 items-center text-gray-400">
          <span>{timePosted}</span>
          <RxDotFilled className="text-xs" />
          <span>{duration}</span>
        </p>
        <p className="text-xl font-bold mt-3 text-text-heading">{role}</p>
        <p className="text-gray-400 mt-3">{company}</p>
        <p className="mt-8 text-violet">{location}</p>
      </div>
    </div>
  );
}

export default JobRoleCard;
