// import spinner from "./assets/load-36_256.gif";
import spinner from "./assets/load-142_256.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
