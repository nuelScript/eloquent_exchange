import AboutSection from "./components/about";
import AcademySection from "./components/academy";
import Seperation from "./components/border";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import HomeSection from "./components/home";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSection />
      <Seperation />
      <AboutSection />
      <Seperation />
      <AcademySection />
      <Seperation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
