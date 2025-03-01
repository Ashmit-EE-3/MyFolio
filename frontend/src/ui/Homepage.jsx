import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Redirect from "../components/Redirect";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
function Homepage() {
  return (
    <div className="font-poppins scroll-smooth overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-indie-600 w-full">
        <div className="flex flex-col gap-10 w-full">
          <Redirect
            imageUrl="../../public/image-redirect.jpg"
            heading="Show your unique entrepreneurial story"
            description="Share your journey. Link your startups. Write about your failures, successes, and everything in between. Be you, be unique, be remarkable."
            text="BUILD MY INDIE PAGE"
          />

          <Redirect
            imageUrl="../../public/image-redirect.jpg"
            heading="Get exposure for your startups"
            description="Connect your Stripe or LemonSqueezy account and showcase your revenue. You get a Revenue Verified badge and the Indie Page Revenue Bot will share your revenue milestones on Twitter."
            text="GROW MY STARTUPS"
            color="#282A36"
          />

          <Redirect
            imageUrl="../../public/image-redirect.jpg"
            heading="Gamify hard work"
            description="Connect with other entrepreneurs and compete for the Leaderboards. Hard work shouldn't be boring."
            text="JOIN THE LEADERBOARDS"
          />

          <Redirect
            imageUrl="../../public/image-redirect.jpg"
            heading="Build what your audience loves"
            description="Analyze traffic and clicks on your startups. Find out what your followers enjoy the most, rinse and repeat."
            text="START FOR FREE"
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
