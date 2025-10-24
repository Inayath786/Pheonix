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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "./analytics";

import TransformationCarousel from "./TransformationCaurosel";
import AboutUs from "./AboutUs";
console.log({ Navbar, Hero, Programs, Trainers, Pricing, Contact });

function App() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <Navbar />
      <Header/>
      <Hero />
      <AboutUs/>
      <Programs />
      <Stats/>
      <TransformationCarousel/>
      <Trainers />
      <Gallery/>
      <Testimonials/>
      <Pricing />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
