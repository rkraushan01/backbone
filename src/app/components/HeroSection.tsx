"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import prashant from "@/data/prashant.jpg";
import prashant2 from "@/data/prashant2.png";
import ContactUs from "@/app/components/ContactUs";
function HeroSection() {
  return (
    <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-0 w-full text-center">
        <div className="flex flex-col md:flex-row mt-5 gap-4 md:gap-8">
          {/* Left Side (First Inner Div) */}
          <div className="w-full h-auto md:w-1/2 md:pr-4  overflow-hidden ">
            <ContactUs />
          </div>

          {/* Right Side (Second Inner Div) */}
          <div className="flex items-center justify-center sm:pt-60 ">
            <img
              src={prashant2.src}
              alt="Description of the image"
              className="object-cover h-full w-full "
            />
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
