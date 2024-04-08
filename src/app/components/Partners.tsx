"use client";
import Link from "next/link";
import partnerData from "@/data/partners.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Partner {
    id: number;
    coachingName: string;
    description: string;
    coachingLogo: string;
    coachingWebsite: string;
    isFeatured: boolean;
  }
  

function Partners() {
  const featuredPartners = (partnerData as any).partners.filter(
    (partner: Partner) => partner.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Partners
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPartners.map((partner: Partner) => (
            <div key={partner.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex items-center text-center flex-grow">
                 
                  <div>
                    
                    <div>
                  
                   <span>
                   <img
                      src={partner.coachingLogo}
                      alt={partner.coachingLogo}
                      className="w-10 h-10 rounded-full"
                    />
                   </span>

                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                      {partner.coachingName}{" "}
                    </p>
                    </div>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {partner.description}
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

export default Partners;
