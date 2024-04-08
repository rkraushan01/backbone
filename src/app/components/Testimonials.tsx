"use client";
import Link from "next/link";
import testimonialData from "@/data/testimonials.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Testimonial {
  id: number;
  studentName: string;
  testimonial: string;
  image: string;
  college: string;
  isFeatured: boolean;
}

function Testimonials() {
  const featuredTestimonials = testimonialData.testimonials.filter(
    (testimonial: Testimonial) => testimonial.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Testimonials
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredTestimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex items-center text-center flex-grow">
                 
                  <div>
                    
                    <div>
                  
                   <span>
                   <img
                      src={testimonial.image}
                      alt={testimonial.studentName}
                      className="w-10 h-10 rounded-full"
                    />
                   </span>

                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                      {testimonial.studentName}{" "}
                    </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-bold">
                      {testimonial.college}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {testimonial.testimonial}
                    </p>
                   
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
