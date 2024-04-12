import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useJobs } from "../contexts/AppContext.jsx";
import { Suspense, lazy } from "react";
import Loader from "./Loader.jsx";

const Homepage = lazy(() => import("../pages/Homepage.jsx"));
const JobDetails = lazy(() => import("../pages/JobDetails.jsx"));
const JobApplication = lazy(() => import("../pages/JobApplication.jsx"));
const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"));

function MainApp() {
  const { isDark } = useJobs();

  return (
    <div
      className={`font-kumbh transition-colors duration-1000 min-h-screen ${
        isDark ? "bg-gray-900" : "bg-background-body"
      } `}
    >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="jobdetails/:jobId" element={<JobDetails />} />
            <Route
              path="jobapplication/:jobname"
              element={<JobApplication />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default MainApp;
