import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage.jsx";
import JobDetails from "../pages/JobDetails.jsx";
import JobApplication from "../pages/JobApplication.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import { useJobs } from "../contexts/AppContext.jsx";

function MainApp() {
  const { isDark } = useJobs();

  return (
    <div
      className={`font-kumbh transition-colors duration-1000 min-h-screen ${
        isDark ? "bg-gray-900" : "bg-background-body"
      } `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="jobdetails/:jobId" element={<JobDetails />} />
          <Route path="jobapplication/:jobname" element={<JobApplication />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainApp;
