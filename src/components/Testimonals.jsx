import ReviewCard from "./ReviewCard";
import ABU_OBAIDA from "../assets/images/abu-obaida.jpg";
import ABU_OBAIDA2 from "../assets/images/abu-obaida2.jpg";
import ABU_OBAIDA3 from "../assets/images/abu-obaida3.webp";

function TestimonalSection() {
  return (
    <>
      <div className="container mx-auto mt-20 flex flex-col justify-center space-y-20">
        <h1 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h1>
        <div className="hidden space-x-20 md:flex md:justify-center md:items-center">
          <ReviewCard
            image={ABU_OBAIDA}
            name="Abu Obaida"
          />
          <ReviewCard
            image={ABU_OBAIDA2}
            name="Al Arab"
          />
          <ReviewCard
            image={ABU_OBAIDA3}
            name="Ameer"
          />
        </div>
      </div>
    </>
  );
}

export default TestimonalSection;
