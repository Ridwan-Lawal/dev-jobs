/* eslint-disable react/prop-types */

import { RxDotFilled } from "react-icons/rx";
import JobDetailsMainContentHeader from "./JobDetailsMainContentHeader";

function JobDetailsMainContent() {
  return (
    <div className=" shadow-md shadow-blue-50 bg-white pb-14 pt-12 mt-10 rounded-lg px-9">
      <JobDetailsMainContentHeader />

      <div className="mt-11 space-y-10">
        {/* role details */}
        <p className="text-grey-medium leading-normal">
          Scoot is looking for a Senior Software Engineer passionate about
          building approachable, innovative and user-first experiences to join
          our small but growing Engineering team. You will be responsible for
          building and maintaining front end functionality across all of Scoot’s
          applications, fostering a growing team of software engineers, and
          helping drive and maintain best software patterns and practices in our
          codebase.
        </p>

        {/* role requirement */}
        <section className="space-y-6">
          <h3 className="text-[19px] text-text-heading font-bold">
            Requirements
          </h3>
          <p className="text-grey-medium leading-normal">
            The ideal candidate is as passionate about solving challenges
            through technology. They are well-versed in building proof of
            concepts from scratch and taking these POCs to production and scale.
            The right fit will have the engineering experience to build and
            iterate quickly and is comfortable working with product and design
            to set the technical strategy and roadmap.
          </p>

          <ul className="space-y-1">
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
          </ul>
        </section>

        {/* role to do */}
        <section className="space-y-6">
          <h3 className="text-[19px] text-text-heading font-bold">
            What you will do
          </h3>
          <p className="text-grey-medium leading-normal">
            The ideal candidate is as passionate about solving challenges
            through technology. They are well-versed in building proof of
            concepts from scratch and taking these POCs to production and scale.
            The right fit will have the engineering experience to build and
            iterate quickly and is comfortable working with product and design
            to set the technical strategy and roadmap.
          </p>

          <ul className="space-y-1">
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
            <li className="text-grey-medium flex items-center gap-8">
              <RxDotFilled className="text-xs text-grey-medium" />
              <span>Ability to debug complex systems.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default JobDetailsMainContent;
