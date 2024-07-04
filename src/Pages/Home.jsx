import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import BookCar from "../components/BookSlt";
import {Flip} from "react-reveal"
import {Zoom} from "react-reveal"
import {Reveal} from "react-reveal"
function Home() {
  return (
    <>
    <Reveal>
      <Hero />
      </Reveal>
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
