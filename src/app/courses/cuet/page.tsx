"use client";
import React from "react";
import { Button } from "@/app/components/ui/moving-border";
import Link from "next/link";

function page() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black text-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 mt-36">
            <h3 className="text-lg font-semibold leading-6 text-white text-center mb-5 ">
            CUET
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-white text-left">
              Dear Friends!
              <br />
              Congratulations on your JEE result!
              <br />
              You might have many questions about how to choose the best college
              available at your rank!
              <br />
              Don't worry!
              <br />
              PointerZone brings you an exclusive one-on-one talk with top
              IITians to discuss placements, branch change policies, overall
              culture, and the campus life of their colleges.
              <br />
              At PointerZone, we understand your many questions and
              uncertainties about choosing the right college. To address these
              concerns, we offer an exclusive opportunity for you to have
              one-on-one discussions with top IITians who can provide insights
              into placement opportunities, branch change policies, the overall
              culture, and the campus life of their respective colleges. We aim
              to equip you with the necessary information to make an informed
              decision that suits your preferences.
              <br />
              We will provide a personalized PDF document based on your rank,
              offering tailored advice and recommendations. Our team is
              committed to ensuring you secure the best college available, even
              if your rank is comparatively lower.
              <br />
              At PointerZone, we are committed to providing unparalleled support
              throughout your engineering admissions journey. With our extensive
              services, you'll receive personalized counseling from experienced
              IITians and NITians, ensuring tailored advice that aligns with
              your goals. Our unlimited WhatsApp support ensures that your
              queries are promptly addressed, leaving no question unanswered.
              <br />
              To ensure students' success in their engineering aspirations, PointerZone remains vigilant about any developments in the CUET (Central Universities Entrance Test) college counseling process, including private institutions. The participation of esteemed private colleges like Jamia Millia Islamia, Aligarh Muslim University, and Banaras Hindu University underscores our unwavering commitment to guiding students. By staying updated, we provide students with tailored advice, confidently navigating them through the admission process. At PointerZone, our personalized support significantly bolsters students' chances of securing admission to their preferred engineering colleges through CUET counseling or direct admission to private institutions.


            </p>
          </div>
          <div className="px-4 py-5 sm:px-6 flex flex-col items-center">
            <Link href={"/register"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800
                    font-bold text-lg mb-5
                    "
              >
                Register Now
              </Button>
            </Link>
            <p className="mt-10 max-w-2xl text-sm text-white text-center">
              Our team will contact you within 12 hours. Wish you all the best
              in this exciting phase of your academic journey! Unlock benefits:
              Connect with experienced IITians & NITians for personalized
              guidance. Enjoy unlimited WhatsApp support. Sign up now & embark
              on your academic journey confidently!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
