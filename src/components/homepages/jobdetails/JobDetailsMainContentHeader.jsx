import { RxDotFilled } from "react-icons/rx";
import Button from "../Button";
import { useContext } from "react";
import AppContext from "../../AppContext";

/* eslint-disable react/prop-types */
function JobDetailsMainContentHeader({
  timePosted = "5h ago",
  duration = "Full Time",
  role = "Senior Software Engineer",
  location = "United Kingdom",
}) {
  const { isDark } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between gap-2 ">
      {/* role details */}
      <section className="space-y-2">
        <p className="flex gap-2 items-center text-gray-400">
          <span>{timePosted}</span>
          <RxDotFilled className="text-xs" />
          <span>{duration}</span>
        </p>
        <p
          className={`text-xl font-bold  ${
            isDark ? "text-white" : "text-text-heading"
          } `}
        >
          {role}
        </p>
        <p className="text-violet font-bold">{location}</p>
      </section>

      {/*Apply button */}
      <section className="w-[40%] flex justify-end">
        <Button textColor="text-white font-bold">Apply now</Button>
      </section>
    </div>
  );
}

export default JobDetailsMainContentHeader;
