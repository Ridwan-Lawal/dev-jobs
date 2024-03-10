/* eslint-disable react/prop-types */
function Button({
  bgColor = "bg-violet",
  textColor = "text-white",
  padX = "px-8",
  children,
  width,
}) {
  return (
    <button
      className={`${bgColor} ${width} ${textColor} rounded-md ${padX} py-3`}
    >
      {children}
    </button>
  );
}

export default Button;
