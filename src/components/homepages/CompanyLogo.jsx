/* eslint-disable react/prop-types */

function CompanyLogo({ children, bgColor = "" }) {
  const style = {
    backgroundColor: bgColor,
  };
  return (
    <section
      style={style}
      className={` -mt-14 py-[19px] px-2 rounded-xl w-[50px] flex justify-center items-center h-[50px]`}
    >
      {children}
    </section>
  );
}

export default CompanyLogo;
