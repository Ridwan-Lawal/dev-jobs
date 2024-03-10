import Banner from "/src/components/homepages/Banner.jsx";
import Forms from "/src/components/homepages/forms/Forms.jsx";
import JobRoleCard from "/src/components/homepages/JobRoleCard.jsx";

function Homepage() {
  return (
    <div className="relative ">
      <Banner />
      <Forms />

      <div className=" mt-[72px] sm:mt-32   border-blue-500 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-20 gap-x-8 px-6 md:px-8 max-w-[1195px] mx-auto">
        <JobRoleCard />
        <JobRoleCard />
        <JobRoleCard />
        <JobRoleCard />
        <JobRoleCard />
        <JobRoleCard />
      </div>
    </div>
  );
}

export default Homepage;
