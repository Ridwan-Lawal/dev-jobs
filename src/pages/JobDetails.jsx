import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import Banner from "../components/homepages/Banner";
import JobDetailsFooter from "../components/homepages/jobdetails/JobDetailsFooter";
import JobDetailsHeader from "../components/homepages/jobdetails/JobDetailsHeader";
import JobDetailsMainContent from "../components/homepages/jobdetails/JobDetailsMainContent";
import AppContext from "../components/AppContext";

function JobDetails() {
  const navigate = useNavigate();

  const { jobRolesData } = useContext(AppContext);
  const { jobId } = useParams();

  const jobRoleDetails = jobRolesData
    ?.filter((jobRole) => jobRole.id === +jobId)
    .at(0);

  return (
    <div className="">
      <Banner onClick={() => navigate("/")} />
      <div className="max-w-3xl px-8 mx-auto">
        <JobDetailsHeader jobRoleDetails={jobRoleDetails} />
        <JobDetailsMainContent jobRoleDetails={jobRoleDetails} />
      </div>
      <JobDetailsFooter
        companyName={jobRoleDetails?.company}
        location={jobRoleDetails?.location}
        role={jobRoleDetails?.position}
      />
    </div>
  );
}

export default JobDetails;
