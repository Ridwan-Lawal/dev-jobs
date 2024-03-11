import Banner from "../components/homepages/Banner";
import JobDetailsFooter from "../components/homepages/jobdetails/JobDetailsFooter";
import JobDetailsHeader from "../components/homepages/jobdetails/JobDetailsHeader";
import JobDetailsMainContent from "../components/homepages/jobdetails/JobDetailsMainContent";

function JobDetails() {
  return (
    <div className="">
      <Banner />
      <div className="max-w-3xl px-8 mx-auto">
        <JobDetailsHeader />
        <JobDetailsMainContent />
      </div>
      <JobDetailsFooter />
    </div>
  );
}

export default JobDetails;
