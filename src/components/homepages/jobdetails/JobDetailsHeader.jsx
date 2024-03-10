/* eslint-disable react/prop-types */

import Button from "../Button";

function JobDetailsHeader({
  bgColor = "bg-orange-500",
  companyLink = "https://example.com/scoot",
}) {
  return (
    <div className=" flex flex-col tablet:flex-row rounded-md shadow-lg shadow-dark-200 tablet:pr-8 overflow-hidden gap-5">
      <section
        className={`${bgColor} -mt-6 py-[19px] px-2 tablet:mt-0 rounded-xl w-fit tablet:rounded-none flex items-center tablet:w-[20%] justify-center `}
      >
        <img src="/src/assets/logos/scoot.svg" alt="" className="tablet:w-12" />
      </section>

      <div className="flex flex-col tablet:flex-row items-center gap-10 tablet:justify-between py-10 w-full">
        <section className="text-text-heading text-center tablet:text-left space-y-3 tablet:space-y-2">
          <h2 className="text-2xl font-bold">Scoot</h2>
          <p>{companyLink}</p>
        </section>
        <Button
          bgColor="bg-violet-ultralight"
          width="w-fit"
          textColor="text-violet font-bold"
        >
          Company site
        </Button>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
