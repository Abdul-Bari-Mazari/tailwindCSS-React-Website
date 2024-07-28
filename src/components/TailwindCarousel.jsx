import { Carousel, Typography, Button } from "@material-tailwind/react";
import ReviewCard from "./ReviewCard";
import ABU_OBAIDA from "../assets/images/abu-obaida.jpg";
import ABU_OBAIDA2 from "../assets/images/abu-obaida2.jpg";
import ABU_OBAIDA3 from "../assets/images/abu-obaida3.webp";

export function CarouselWithContent({ className }) {
  return (
    <Carousel className="h-96  mt-12 w-full rounded-xl flex md:hidden">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <ReviewCard
            image={ABU_OBAIDA}
            name="Abu Obaida"
          />
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <ReviewCard
            image={ABU_OBAIDA2}
            name="Al Arab"
          />
        </div>
      </div>
      <div className="relative h-full w-full">
        {/* <img
          src=""
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <ReviewCard
            image={ABU_OBAIDA3}
            name="Ameer"
          />
        </div>
      </div>
    </Carousel>
  );
}
