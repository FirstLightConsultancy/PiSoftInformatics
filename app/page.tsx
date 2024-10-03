import { Blogs } from "@/components/Blogs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurAppFeatures from "@/components/OurAppFeatures";
import OurPortfolio from "@/components/OurPortfolio";
import OurPremiumSponsors from "@/components/OurPremiumSponsors";
import { OurTeam } from "@/components/OurTeam/OurTeam";
import SplineComp from "@/components/SplineComp/SplineComp";
import Statistics from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurModules from "@/components/OurModules";
import OurServices from "@/components/OurServices";
import Navbar from "@/components/Navbar/Navbar";
import ImageCarouselHome from "@/components/ImageCarousalHome/ImageCarouselHome";


export default function Home() {
  
  return (
    <main className="">
      <Navbar/>
      {/* <HeroSliderWithVideo /> */}
      <HeroSection />
      {/* <Background/> */}
      <SplineComp />
      <OurPremiumSponsors />
      {/* <CarrerWithUs/> */}
      {/* <AboutUsPage/> */}

      <div className="w-full bg-gray-100">{/* <CarouselSize /> */}</div>
      <Statistics />

      {/* <SocialLinks /> */}
      <OurModules />
      <WhyChooseUs />
      <OurPortfolio />
      
      <OurServices />
      <OurAppFeatures />
      <Blogs />

      {/* <Downloads /> */}
      <OurTeam />
      <ContactUs />
      <Footer />
      {/* <ChatBox />  */}
    </main>
  );
}
