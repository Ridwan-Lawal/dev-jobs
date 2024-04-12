/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useMemo,
} from "react";

import jobData from "../data.json";

const AppContext = createContext();

const intialValue = {
  isDark: false,
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

    case "jobState/fromStorage":
      return action.payload;

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

  //effect for storing state in the  Local storage;

  useEffect(
    function () {
      if (state === intialValue) return;
      localStorage.setItem("jobState", JSON.stringify(state));
    },
    [state]
  );

  // effect for getting state from the local storage
  useEffect(function () {
    const storedState = JSON.parse(localStorage.getItem("jobState"));
    if (!storedState) return;

    dispatch({ type: "jobState/fromStorage", payload: storedState });
  }, []);

  const values = useMemo(() => {
    return {
      isDark,
      dispatch,
      jobRolesData,
      fullTimeFilter,
      filterByTitle,
      filterByLocation,
      isFilterByLocationMobileOpen,
    };
  }, [
    isDark,
    dispatch,
    jobRolesData,
    fullTimeFilter,
    filterByTitle,
    filterByLocation,
    isFilterByLocationMobileOpen,
  ]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

function useJobs() {
  const value = useContext(AppContext);
  return value;
}

export { AppProvider, useJobs };
