/* eslint-disable react/prop-types */

import { useJobs } from "../../../contexts/AppContext";

import JobDetailsMainContentHeader from "./JobDetailsMainContentHeader";
import JobTodoList from "./JobTodoList";

function JobDetailsMainContent({ jobRoleDetails }) {
  const { isDark } = useJobs();
  return (
    <div
      className={`${
        isDark ? "bg-gray-800 shadow-gray-900" : "shadow-blue-50 bg-white"
      } shadow-md  pb-14 pt-12 mt-10 rounded-lg px-9 transition-all duration-1000`}
    >
      <JobDetailsMainContentHeader jobRoleDetails={jobRoleDetails} />

      <div className="mt-11 space-y-10">
        {/* role details */}
        <p
          className={`leading-normal ${
            isDark ? "text-grey-light" : "text-grey-medium"
          } `}
        >
          {jobRoleDetails?.description}
        </p>

        {/* role requirement */}
        <section className="space-y-6">
          <h3
            className={`text-[19px] ${
              isDark ? "text-white" : "text-text-heading"
            }  font-bold`}
          >
            Requirements
          </h3>
          <p
            className={`leading-normal ${
              isDark ? "text-grey-light" : "text-grey-medium"
            } `}
          >
            {jobRoleDetails?.requirements?.content}
          </p>

          <ul className="space-y-2">
            {jobRoleDetails?.requirements?.items.map((item) => (
              <JobTodoList key={item} todo={item} />
            ))}
          </ul>
        </section>

        {/* role to do */}
        <section className="space-y-6">
          <h3
            className={`text-[19px] ${
              isDark ? "text-white" : "text-text-heading"
            }  font-bold`}
          >
            What you will do
          </h3>
          <p
            className={`leading-normal ${
              isDark ? "text-grey-light" : "text-grey-medium"
            } `}
          >
            {jobRoleDetails?.role?.content}
          </p>

          <ul className="space-y-2">
            {jobRoleDetails?.role?.items?.map((item) => (
              <JobTodoList key={item} todo={item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default JobDetailsMainContent;
