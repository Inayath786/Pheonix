import Navbar from "./Navbar";
import Hero from "./Hero";
import Programs from "./Programs";
import Trainers from "./Trainers";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Header from "./Header";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Stats from "./Stats";
import WhyUs from "./Whyus";
import Community from "./Community";
import TransformationCarousel from "./TransformationCaurosel";
import AboutUs from "./AboutUs";
import RatingsSection from "./Rating";
import Managers from "./Managers";
import Location from "./Location";
console.log({ Navbar, Hero, Programs, Trainers, Pricing, Contact });

function App() {
  return (
    <>
      <Navbar />
      {/* <Header/> */}
      <Hero />
      <AboutUs/>
      <Programs />
      <WhyUs/>
      <Managers/>
      <Stats/>
      <Community/>
      <TransformationCarousel/>
      <RatingsSection/>
      <Trainers />
      <Gallery/>
      <Testimonials/>
      <Pricing />
      <Location/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
