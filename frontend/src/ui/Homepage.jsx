import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Redirect from "../components/Redirect";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import image1 from "../../public/image1.jpeg" ;
import image2 from "../../public/image2.jpeg" ;
import image3 from "../../public/image3.jpeg" ;
import image4 from "../../public/image4.jpeg" ;

function Homepage() {
  return (
    <div className="font-poppins scroll-smooth overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-indie-600 w-full">
        <div className="flex flex-col gap-10 w-full">
          <Redirect
            imageUrl={image1}
            heading="Build. Showcase. Inspire."
            description="Let your work do the talking and connect with like-minded professionals effortlessly."
            text="BUILD MY FOLIO PAGE"
          />

          <Redirect
            imageUrl={image2}
            heading="One Profile, Endless Possibilities!"
            description="Showcase your skills, achievements, and projects - all in one place."
            text="BUILD YOUR UNIQUE PROFILE"
            color="#282A36"
          />

          <Redirect
            imageUrl={image3}
            heading="STAND OUT IN THE DIGITAL WORLD"
            description="Craft a stunning portfolio that sets you apart and attracts the right oppurtunities."
            text="BUILD YOUR PERSONAL BRAND"
          />

          <Redirect
            imageUrl={image4}
            heading="YOUR PORTFOLIO, YOUR STORY"
            description="Bring your journey to life with an interactive and dynamic portfolio page."
            text="BUILD FOR FREE"
            color="#282A36"
          />
        </div>
      </div>
      <Landing />
      <Footer />
    </div>
  );
}

export default Homepage;
