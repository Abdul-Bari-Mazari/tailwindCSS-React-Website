import HeroImage from "../assets/images/HeroImage.svg";
import GetStarted from "./GetStartedButton";

function HeroSection() {
  return (
    <>
      <div className="container p-6 mx-auto mt-12 flex flex-wrap-reverse justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:max-w-md md:text-left md:text-5xl">
            Bring everyone together to build better products
          </h1>
          <p className="mt-12 text-gray-500 text-center md:max-w-sm md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:block">
            <GetStarted
              className="mt-12 text-white"
              text="Get Started"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            className=""
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
