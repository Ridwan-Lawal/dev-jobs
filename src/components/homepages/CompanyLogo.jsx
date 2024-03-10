/* eslint-disable react/prop-types */

function CompanyLogo({ children, bgColor = "bg-orange-500" }) {
  return (
    <section className={`${bgColor} -mt-14 py-[19px] px-2 rounded-xl w-fit`}>
      {children}
    </section>
  );
}

export default CompanyLogo;
