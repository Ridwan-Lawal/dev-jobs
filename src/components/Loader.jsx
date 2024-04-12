import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="mt-44 px-8 flex justify-center items-center">
      <Bars
        height="50"
        width="50"
        color="blue"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
