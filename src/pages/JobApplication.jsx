import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import AppContext from "../components/AppContext";
import { useContext } from "react";

function JobApplication() {
  const { isDark } = useContext(AppContext);

  return (
    <div className="px-8 py-8">
      <button>
        <FaArrowLeftLong
          className={`text-2xl  cursor-pointer ${
            isDark ? "text-white" : "text-gray-700"
          } `}
        />
      </button>

      <div className="flex justify-center items-center h-screen">
        <section
          className={`w-full max-w-md rounded-md shadow-md  flex flex-col gap-5 pt-10 pb-11 bg-white items-center ${
            isDark ? "bg-gray-800 shadow-gray-900" : "bg-white shadow-gray-200"
          } `}
        >
          <IoIosCheckmarkCircleOutline
            className={`text-[70px]  ${
              isDark ? "text-green-400" : "text-green-700"
            }`}
          />

          <p
            className={`${
              isDark ? "text-white" : "text-gray-700"
            }  rounded-md text-2xl font-bold`}
          >
            Application submitted
          </p>
        </section>
      </div>
    </div>
  );
}

export default JobApplication;
