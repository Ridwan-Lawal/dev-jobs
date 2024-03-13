/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RxDotFilled } from "react-icons/rx";
import AppContext from "../../AppContext";

function JobTodoList({ todo = "Ability to debug complex systems." }) {
  const { isDark } = useContext(AppContext);
  return (
    <li
      className={` flex items-center gap-8 ${
        isDark ? "text-grey-light" : "text-grey-medium"
      }`}
    >
      <RxDotFilled className="text-xs text-grey-medium" />
      <span>{todo}</span>
    </li>
  );
}

export default JobTodoList;
