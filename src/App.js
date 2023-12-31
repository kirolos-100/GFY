import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/UI/Hero.jsx";
import Exercise from "./components/UI/Exercise.jsx";
import Start from "./components/UI/Start.jsx";
import Priceing from "./components/UI/Priceing.jsx";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";
import { useEffect } from "react";
import Aos from 'aos';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <>
      <Header />
      <Hero/>
      <Exercise/>
      <Start/>
      <Priceing/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
