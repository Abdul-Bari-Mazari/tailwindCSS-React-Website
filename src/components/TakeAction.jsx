import GetStarted from "./GetStartedButton";

function TakeAction() {
  return (
    <>
      <div className="takeActionMain bg-themeOrange mt-20">
        <div className="container gap-y-10 mx-auto p-6 py-24 flex flex-col justify-center items-center md:py-12 md:flex-row md:justify-between md:items-center ">
          <h1 className="text-5xl max-w-xl text-white font-bold text-center md:text-4xl md:text-left">
            Simplify how your team works today
          </h1>
          <GetStarted
            className="bg-white text-themeOrange"
            text="Get Started"
          />
        </div>
      </div>
    </>
  );
}

export default TakeAction;
