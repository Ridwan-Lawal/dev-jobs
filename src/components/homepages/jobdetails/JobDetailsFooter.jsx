import Button from "../Button";

/* eslint-disable react/prop-types */
function JobDetailsFooter({
  companyName = "Scoot",
  location = "United Kingdom",
}) {
  return (
    <div className="bg-white">
      <div className=" flex flex-row items-center justify-between mt-20  py-6 px-8 max-w-3xl mx-auto">
        <section className="space-y-1">
          <h2 className="text-2xl text-text-heading font-bold">
            {companyName}
          </h2>
          <p className="text-grey-medium">{location}</p>
        </section>

        <Button textColor="font-semibold text-white">Apply now</Button>
      </div>
    </div>
  );
}

export default JobDetailsFooter;
