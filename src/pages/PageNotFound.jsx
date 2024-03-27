import { FaArrowLeft } from "react-icons/fa6";

import { useJobs } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const { isDark } = useJobs();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft className={`text-xl ${isDark && "text-white"} `} />
      </button>

      <div
        className={`flex flex-col items-center justify-center gap-6 h-screen  text-3xl italic font-semibold ${
          isDark ? "text-white" : "text-gray-800"
        } `}
      >
        <p>👻</p>
        <p>Page Not Found</p>
      </div>
    </div>
  );
}

export default PageNotFound;
