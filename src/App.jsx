import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import JobDetails from "../src/pages/JobDetails.jsx";
import JobApplication from "../src/pages/JobApplication.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";
import { useEffect, useReducer } from "react";
import AppContext from "./components/AppContext.jsx";

const intialValue = {
  isDark: true,
  status: "loading",
  errMessage: "",
  jobRolesData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    case "dataReady":
      return { ...state, status: "ready", jobRolesData: action.payload };

    case "clearErr":
      return { ...state, status: "loading", errMessage: "" };

    default:
      throw new Error("Unkown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialValue);
  const { isDark, jobRolesData } = state;

  useEffect(function () {
    async function getJobRoles() {
      try {
        dispatch({ type: "clearErr" });
        const res = await fetch(`http://localhost:4000/jobRoles`);
        if (!res.ok) throw new Error("Something went wrong fetching data!");

        const data = await res.json();
        dispatch({ type: "dataReady", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed", payload: err.message });
        console.error(err.message);
      }
    }
    getJobRoles();
  }, []);

  return (
    <AppContext.Provider value={{ isDark, dispatch, jobRolesData }}>
      <div
        className={`font-kumbh transition-colors duration-1000 min-h-screen ${
          isDark ? "bg-gray-900" : "bg-background-body"
        } `}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="jobdetails/:jobId" element={<JobDetails />} />
            <Route
              path="jobapplication/:jobname"
              element={<JobApplication />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
