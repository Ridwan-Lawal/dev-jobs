/* eslint-disable react/prop-types */

import { RxDotFilled } from "react-icons/rx";
import { useJobs } from "../../../contexts/AppContext";

function JobTodoList({ todo = "Ability to debug complex systems." }) {
  const { isDark } = useJobs();
  return (
    <li
      className={` flex  gap-8 ${
        isDark ? "text-grey-light" : "text-grey-medium"
      }`}
    >
      <section className="mt-2">
        <RxDotFilled className="text-xs text-grey-medium" />
      </section>

      <span>{todo}</span>
    </li>
  );
}

export default JobTodoList;
