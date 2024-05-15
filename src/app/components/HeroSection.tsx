// "use client";
// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import prashant2 from "@/data/prashant2.png";
// import ContactUs from "@/app/components/ContactUs";
// function HeroSection() {
//   return (
//     <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className="p-4 relative z-0 w-full text-center">
//         <div className="flex flex-col md:flex-row mt-5 gap-4 md:gap-8">
//           {/* Left Side (First Inner Div) */}
//           <div className="w-full h-auto md:w-1/2 md:pr-4  overflow-hidden ">
//             <ContactUs />
//           </div>

//           {/* Right Side (Second Inner Div) */}

//           <div className="flex flex-col items-center justify-center sm:pt-60 min-h-screen">
//             <h1 className="text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl leading-tight mb-8">
//               "Discover India's top educational consulting platform for expert
//               guidance."
//             </h1>
//             <img
//               src={prashant2.src}
//               alt="Description of the image"
//               className="w-full rounded-lg object-cover shadow-md md:shadow-lg lg:shadow-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";
// import prashant2 from "@/data/prashant2.png";
// import ContactUs from "@/app/components/ContactUs";

// function HeroSection() {
//   return (
//     <div className="flex flex-col md:flex-row h-auto md:h-[60rem] w-full rounded-md items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className="p-4 relative z-0 w-full text-center md:text-left mt-10">  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//           {/* Left Side (Contact Form) */}
//           <div className="order-2 md:order-1 ">
//             <ContactUs />
//           </div>

//           {/* Right Side (Text & Image) */}
//           <div className="flex flex-col items-center justify-center sm:pt-60 min-h-screen order-1 md:order-2">
//             <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-tight mb-8">
//               "Discover India's top educational consulting platform for expert guidance."
//             </h1>
//             <img
//               src={prashant2.src}
//               alt="Description of the image"
//               className="w-full rounded-lg object-cover shadow-md md:shadow-lg lg:shadow-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


"use client";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import prashant2 from "@/data/prashant2.png";
import ContactUs from "@/app/components/ContactUs";

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight
       className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
       />
      <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center  z-10">
        {/* Left Side (Contact Form) */}
        <div className="w-full md:w-1/2 px-6 py-10 md:py-0">
          <div className="max-w-md mx-auto">
            <ContactUs />
          </div>
        </div>

        {/* Right Side (Text and Image) */}
        <div className="w-full md:w-1/2 px-6 py-10 md:py-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center leading-tight md: mt-40">
          "India's top education consulting platform, led by IIT alumni."

          </h1>
          <img
            src={prashant2.src}
            alt="Description of the image"
            className="w-full rounded-lg object-cover shadow-md md:shadow-lg lg:shadow-xl"
          />
        </div>
      </div>

      {/* Spotlight Decoration
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      </div> */}
    </div>
  );
}

export default HeroSection;
