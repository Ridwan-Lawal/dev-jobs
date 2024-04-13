import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useJobs } from "../contexts/AppContext";

import Banner from "/src/components/homepages/Banner.jsx";
import Forms from "/src/components/homepages/forms/Forms.jsx";
import JobRoleCard from "/src/components/homepages/JobRoleCard.jsx";
import Button from "../components/homepages/Button";

function Homepage() {
  const [navIsFixed, setNavIsFixed] = useState(false);
  const { jobRolesData, filterByTitle, filterByLocation, fullTimeFilter } =
    useJobs();
  const navEl = useRef(null);

  /* 
  This filter is for filtering the jobRoles based on title
  if the filterByTitle form is has a value, then I filtered the 
  jobRolesData to return any job which the position of that job is equal to the value of the filterByTitle form. 

  if the filterByTitle form doesn't have a value, the jobRolesData should be returned immediately

  */
  const filteredJobRolesDataByTitle = filterByTitle
    ? jobRolesData.filter((jobRole) =>
        jobRole.position.toLowerCase().includes(filterByTitle.toLowerCase())
      )
    : jobRolesData;

  /* 
  This filter is filtering for the location of jobs  based on the result from the filteredJobRolesDataByTitle.

  if the filterByLocation form  has a value, then I filtered the 
  result from the filteredJobRolesDataByTitle to return any job which the location of that job is equal to the value of the filterByTitle form. 

  if the filterByLocation form doesn't have a value, the result from the filteredJobRolesDataByTitle should be returned immediately

  */

  const filterJobRolesDataByLocation = filterByLocation
    ? filteredJobRolesDataByTitle.filter((jobRole) =>
        jobRole.location.toLowerCase().includes(filterByLocation.toLowerCase())
      )
    : filteredJobRolesDataByTitle;

  /*
    This filter is going to filter the result from filterJobRolesDataByLocation based and return any job that has a fullTimeContract. if it doesn't it's going to return the result from filterJobRolesDataByLocation
    */

  const jobRolesFilteredData = fullTimeFilter
    ? filterJobRolesDataByLocation.filter(
        (jobRole) => jobRole.contract === "Full Time"
      )
    : filterJobRolesDataByLocation;

  /*
    This effect is for controlling the nav to be fixed upon scroll
    */

  useEffect(function () {
    const navElSelect = navEl.current;
    const navElCoords = navElSelect.getBoundingClientRect();

    function handleNavFixed() {
      if (window.scrollY > navElCoords.top) setNavIsFixed(true);
      else setNavIsFixed(false);
    }

    window.addEventListener("scroll", handleNavFixed);

    return () => window.removeEventListener("scroll", handleNavFixed);
  }, []);

  return (
    <div className="relative ">
      <Banner navIsFixed={navIsFixed} />
      <Forms />

      <div
        ref={navEl}
        className=" mt-[72px] sm:mt-32   border-blue-500 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-20 gap-x-8 px-6 md:px-8 max-w-[1195px] mx-auto"
      >
        {jobRolesFilteredData.map((jobRole) => (
          <Link
            to={`/jobdetails/${jobRole?.id}?position=${jobRole?.position}`}
            key={jobRole.id}
          >
            <JobRoleCard jobRole={jobRole} />
          </Link>
        ))}
      </div>

      <section className="flex justify-center mt-20">
        <Button>Load More</Button>
      </section>
    </div>
  );
}

export default Homepage;
