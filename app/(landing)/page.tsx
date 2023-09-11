import AboutSection from "./components/about";
import Seperation from "./components/border";
import ContactSection from "./components/contact";
import HomeSection from "./components/home";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSection />
      <Seperation />
      <AboutSection />
      <Seperation />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
