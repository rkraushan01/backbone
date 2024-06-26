import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials"
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    
    <FeaturedCourses/>
    <Testimonials/>
    {/* <Partners /> */}
    <Footer/>
  </main>
  );
}
