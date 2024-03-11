import { RxDotFilled } from "react-icons/rx";
import Button from "../Button";

/* eslint-disable react/prop-types */
function JobDetailsMainContentHeader({
  timePosted = "5h ago",
  duration = "Full Time",
  role = "Senior Software Engineer",
  location = "United Kingdom",
}) {
  return (
    <div className="flex items-center justify-between">
      {/* role details */}
      <section className="space-y-1">
        <p className="flex gap-2 items-center text-gray-400">
          <span>{timePosted}</span>
          <RxDotFilled className="text-xs" />
          <span>{duration}</span>
        </p>
        <p className="text-xl font-bold text-text-heading">{role}</p>
        <p className="text-violet font-bold">{location}</p>
      </section>

      {/*Apply button */}
      <Button textColor="text-white font-bold">Apply now</Button>
    </div>
  );
}

export default JobDetailsMainContentHeader;
