import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import JobDetails from "../src/pages/JobDetails.jsx";
import JobApplication from "../src/pages/JobApplication.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";
import { useEffect, useReducer } from "react";
import AppContext from "./components/AppContext.jsx";

/* make the nav fixed
    ALSO, handle the search functionality
*/

const intialValue = {
  isDark: true,
  status: "loading",
  errMessage: "",
  jobRolesData: [],
  fullTimeFilter: false,
  filterByTitle: "",
  filterByLocation: "",
  isFilterByLocationMobileOpen: false,
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

    case "fullTimeFilterClick":
      return { ...state, fullTimeFilter: !state.fullTimeFilter };

    case "filterByTitleChange":
      return { ...state, filterByTitle: action.payload };

    case "filterByLocationChange":
      return { ...state, filterByLocation: action.payload };

    case "filterByLocationMobileView":
      return {
        ...state,
        isFilterByLocationMobileOpen: !state.isFilterByLocationMobileOpen,
      };

    default:
      throw new Error("Unkown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialValue);
  const {
    isDark,
    jobRolesData,
    fullTimeFilter,
    filterByTitle,
    filterByLocation,
    isFilterByLocationMobileOpen,
  } = state;

  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getJobRoles() {
      try {
        dispatch({ type: "clearErr" });
        const res = await fetch(`http://localhost:4000/jobRoles`, { signal });
        if (!res.ok) throw new Error("Something went wrong fetching data!");

        const data = await res.json();
        dispatch({ type: "dataReady", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "dataFailed", payload: err.message });
        console.error(err.message);
      }
    }
    getJobRoles();

    return () => abortController.abort();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        dispatch,
        jobRolesData,
        fullTimeFilter,
        filterByTitle,
        filterByLocation,
        isFilterByLocationMobileOpen,
      }}
    >
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
