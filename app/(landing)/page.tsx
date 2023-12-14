import AboutSection from "./components/about";
import AcademySection from "./components/academy";
import Seperation from "./components/border";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import HomeSection from "./components/home";
import ReferralSection from "./components/referral";
import ReviewSection from "./components/reviews";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSection />
      <Seperation />
      <AboutSection />
      <Seperation />
      <AcademySection />
      <Seperation />
      <ReferralSection />
      <Seperation />
      <ReviewSection />
      <Seperation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
