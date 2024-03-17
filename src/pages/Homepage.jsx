import { useContext, useEffect, useRef, useState } from "react";

import Banner from "/src/components/homepages/Banner.jsx";
import Forms from "/src/components/homepages/forms/Forms.jsx";
import JobRoleCard from "/src/components/homepages/JobRoleCard.jsx";
import AppContext from "../components/AppContext";
import { Link } from "react-router-dom";

function Homepage() {
  const [navIsFixed, setNavIsFixed] = useState(false);
  const { jobRolesData, filterByTitle, filterByLocation } =
    useContext(AppContext);
  const navEl = useRef(null);

  const filteredJobRolesDataByTitle = filterByTitle
    ? jobRolesData.filter((jobRole) =>
        jobRole.position.toLowerCase().includes(filterByTitle.toLowerCase())
      )
    : jobRolesData;

  const filterJobRolesDataByLocation = filterByLocation
    ? filteredJobRolesDataByTitle.filter((jobRole) =>
        jobRole.location.toLowerCase().includes(filterByLocation.toLowerCase())
      )
    : filteredJobRolesDataByTitle;

  useEffect(function () {
    const navElSelect = navEl.current;
    const navElCoords = navElSelect.getBoundingClientRect();
    console.log(navElCoords);

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
        {filterJobRolesDataByLocation.map((jobRole) => (
          <Link
            to={`/jobdetails/${jobRole?.id}?position=${jobRole?.position}`}
            key={jobRole.id}
          >
            <JobRoleCard jobRole={jobRole} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
