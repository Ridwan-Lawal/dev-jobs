import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import JobDetails from "../src/pages/JobDetails.jsx";
import JobApplication from "../src/pages/JobApplication.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";

function App() {
  return (
    <div className="font-kumbh bg-background-body min-h-screen ">
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

export default App;
