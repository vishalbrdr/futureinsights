import Call from "./components/Call";
import Carosuel from "./components/Carosuel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";
function App() {
  return (
    <>
      <Call />
      <Navbar />
      <Carosuel />
      <Hero />
      <Services />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
