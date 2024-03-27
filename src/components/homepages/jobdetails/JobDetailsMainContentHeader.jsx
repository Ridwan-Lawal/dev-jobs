import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useJobs } from "../../../contexts/AppContext";

import Button from "../Button";

/* eslint-disable react/prop-types */
function JobDetailsMainContentHeader({ jobRoleDetails }) {
  const { isDark } = useJobs();

  return (
    <div className="flex items-center justify-between gap-2 ">
      {/* role details */}
      <section className="space-y-2">
        <p className="flex gap-2 items-center text-gray-400">
          <span>{jobRoleDetails?.postedAt}</span>
          <RxDotFilled className="text-xs" />
          <span>{jobRoleDetails?.contract}</span>
        </p>
        <p
          className={`text-xl font-bold  ${
            isDark ? "text-white" : "text-text-heading"
          } `}
        >
          {jobRoleDetails?.position}
        </p>
        <p className="text-violet font-bold">{jobRoleDetails?.location}</p>
      </section>

      {/*Apply button */}
      <section className="w-[50%] flex justify-end">
        <Link
          to={`/jobapplication/${jobRoleDetails?.company}?role=${jobRoleDetails?.position}`}
        >
          <Button textColor="text-white font-bold">Apply now</Button>
        </Link>
      </section>
    </div>
  );
}

export default JobDetailsMainContentHeader;
