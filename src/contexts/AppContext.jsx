/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useReducer, createContext, useContext } from "react";

import jobData from "../data.json";

const AppContext = createContext();

const intialValue = {
  isDark: JSON.parse(localStorage.getItem("jobThemes")),
  status: "loading",
  errMessage: "",
  jobRolesData: jobData,
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

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialValue);
  const {
    isDark,
    jobRolesData,
    fullTimeFilter,
    filterByTitle,
    filterByLocation,
    isFilterByLocationMobileOpen,
  } = state;

  // Local storage for theme

  useEffect(
    function () {
      localStorage.setItem("jobThemes", JSON.stringify(isDark));
    },
    [isDark]
  );

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
      {children}
    </AppContext.Provider>
  );
}

function useJobs() {
  const value = useContext(AppContext);
  return value;
}

export { AppProvider, useJobs };
