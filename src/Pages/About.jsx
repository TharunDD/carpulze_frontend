import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
              Welcome to Carpulze, where automotive expertise meets a passion for exceptional service. Established with a commitment to delivering top-notch car care, Carpulze takes pride in a rich history of providing reliable repairs, thorough maintenance, and advanced diagnostics. At Carpulze, our skilled team, driven by a shared dedication to excellence, ensures your vehicle receives the meticulous attention it deserves. As industry enthusiasts, we embrace cutting-edge technologies and adhere to the highest standards. Discover a workshop where your automotive needs are not just met, but exceeded—experience the essence of unparalleled service at Carpulze.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20+</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>80+</h4>
                    <p>Service Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>70+</h4>
                    <p>Repair Tools</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a slot by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(+91) 96266 60671</h3>
             
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
