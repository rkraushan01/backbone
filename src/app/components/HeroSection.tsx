'use client'
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import prashant from "@/data/prashant.jpg";
import prashant2 from "@/data/prashant2.png"

function HeroSection() {
  return (
    <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <div className="flex flex-col md:flex-row mt-20">
          {/* Left Side (First Inner Div) */}
          <div className="md:w-1/2 md:pr-4">
            <div>
              <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                PointerZone is a renowned educational institute located in
                Durgakund, Varanasi, UP, India. It is known for its exceptional coaching programs, particularly in the field of engineering and medical entrance exams. With a legacy of producing top rankers in
                competitive exams like JEE and NEET, PointerZone has earned a
                reputation for excellence in academic coaching. Its rigorous
                curriculum, experienced faculty, and state-of-the-art facilities
                make it a preferred choice for students aspiring for success in
                prestigious entrance examinations.
              </p>
            </div>
          </div>

          {/* Right Side (Second Inner Div) */}
          <div className="md:w-1/2 md:pl-4">
            <div>
              {/* Add your image here */}
              <img
                src={prashant2.src}
                alt="Description of the image"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* <div className="mt-4">
          <Link href={"/register"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800
                    font-bold text-lg
                    "
            >
              Register Now
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
