import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PreventiveMaintenanceSchedule from "../images/cars-big/PreventiveMaintenanceSchedule.jpeg";
import RunnningRepair from "../images/cars-big/RunnningRepair.jpeg";
import ACWorks from "../images/cars-big/ACWorks.jpeg";
import EngineWorks from "../images/cars-big/EngineWorks.jpeg";
import Denting from "../images/cars-big/Denting.jpeg";
import Painting from "../images/cars-big/Painting.jpeg";
import WashWax from "../images/cars-big/Wash&Wax.jpeg";
import RubbingPolish from "../images/cars-big/Rubbing&Polish.jpeg";
import TeflonCoating from "../images/cars-big/TeflonCoating.jpeg";
import InteriorCleaning from "../images/cars-big/InteriorCleaning.jpeg";
import HeadlightPolishing from "../images/cars-big/HeadlightPolishing.jpeg";
import CarWash from "../images/cars-big/CarWash.jpeg";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
const bookBtn = () => {
  document
    .querySelector("#booking-section")
    .scrollIntoView({ behavior: "smooth" });
};

const CarDetails = ({ points }) => {
  const initialVisibleItems = 1;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

  const handleReadMore = () => {
    setVisibleItems(points.length);
  };

  const handleReadLess = () => {
    setVisibleItems(initialVisibleItems);
  };
 

  return (
    <div>
      <ul>
        {points.slice(0, visibleItems).map((point, index) => (
          <li key={index}>
            <i className="fa-solid fa-star"></i> {point}
          </li>
        ))}
      </ul>
      {visibleItems < points.length ? (
  <button onClick={handleReadMore} className="hero-content__text__btns__learn-more">
    Read More
  </button>
) : (
  <button onClick={handleReadLess} className="hero-content__text__btns__learn-more">
    Read Less
  </button>
)}

    </div>
  );
};

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Services" />
        <div className="container">
          <div className="models-div">
            <Zoom>
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={PreventiveMaintenanceSchedule} alt="PreventiveMaintenanceSchedule" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>PMS</p>
                      <CarDetails
                        points={[
                          
                          "PMS-(Preventive Maintenance Schedule) for inspection of engine oil and oil filter.",
                          "Examination and adjustment of tire pressure for optimal performance and safety.",
                          "Regular checking and topping up of essential fluids, such as brake fluid and coolant.",
                          
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div className="models-div__box">

            <div className="models-div__box__img">
                <img src={RunnningRepair} alt="RunnningRepair" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Runnning Repair</p>
                      <CarDetails
                        points={[
                          "Inspection and adjustment of the ignition system for efficient fuel combustion.",
                          "Comprehensive testing and tuning to ensure the car operates smoothly and efficiently.",
                          "Diagnosis and resolution of issues related to the vehicle's engine performance.",
                          
                        ]}
                      />
                    </div>
                  </div>
                  
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                
              </div>
                </div>
              </div>
              </div>
              </Zoom>
              <Zoom>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={ACWorks} alt="ACWorks" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>A/C Works</p>
                      <CarDetails
                        points={[
                          "Inspection and diagnosis of the air conditioning system for any leaks or malfunctions.",
                         "Testing and calibration of climate control settings for comfort and efficiency for optimal performance.",
                         "Cleaning and maintenance of A/C components such as filters and coils.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                
              </div>
                </div>
              </div>
              </div>
              </Zoom>
              <Zoom>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={EngineWorks} alt="EngineWorks" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Engine Works</p>
                      <CarDetails
                        points={[
                          "Comprehensive engine diagnostics to identify any performance issues.",
                          "Performance tuning for improved fuel efficiency and overall engine optimization.",
                          "Inspection and replacement of critical engine components, such as spark plugs and air filters.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                
              </div>
                </div>
              </div>
              </div>
              </Zoom>
              <Zoom>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={Denting} alt="Denting" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Denting</p>
                      <CarDetails
                        points={[
                          "Skilled dent repair services to address minor dents and dings on the vehicle's body.",
                          "Use of specialized tools and techniques to restore the damaged areas without affecting the paint.",
                          "Precision dent removal to enhance the aesthetic appeal of the car and maintain its structural integrity.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
              </div>
              </Zoom>
              <Zoom>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={Painting} alt="Painting" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Painting</p>
                      <CarDetails
                        points={[
                          "Surface preparation including sanding, priming, and masking to ensure a smooth finish.",
                          "Professional automotive painting services for a fresh and appealing look.",
                          "Use of high-quality paints matched to the original color of the vehicle.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                 
                </div>
              </div>
              </div>
              </Zoom>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={WashWax} alt="Wash & Wax" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Wash & Wax</p>
                      <CarDetails
                        points={[
                         "Thorough hand washing to remove dirt, & contaminants from the vehicle's surface.",
                         "Application of high-quality car wax to protect the paint and enhance its shine.",
                         "Cleaning and conditioning of tires, rims, and wheels for a complete polished look.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
              </div>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={RubbingPolish} alt="Rubbing & Polish" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Rubbing & Polish</p>
                      <CarDetails
                        points={[
                          "Hand polishing for precise and detailed work, achieving a smooth and glossy surface.",
                          "Removal of minor scratches and imperfections through rubbing compounds.",
                          "Application of high-quality polish to restore and enhance the vehicle's paint finish.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
              </div>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={TeflonCoating} alt="TeflonCoating" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Teflon Coating</p>
                      <CarDetails
                        points={[
                          "Provides a durable shield against UV rays, oxidation, and environmental contaminants.",
                          "Application of Teflon-based protective coating to the vehicle's exterior surfaces.",
                          "Creates a hydrophobic layer, repelling water and making the car easier to clean.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
               
                </div>
              </div>
              </div>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={InteriorCleaning} alt="InteriorCleaning" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Interior Cleaning</p>
                      <CarDetails
                        points={[
                          "Vacuuming and sanitizing to create a fresh and hygienic interior environment.",
                          "Removal of dust, dirt, and debris from hard-to-reach areas and crevices.",
                          "Thorough cleaning of the car's interior surfaces, including seats, carpets, and upholstery.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
              </div>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={HeadlightPolishing} alt="HeadlightPolishing" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Headlight Polishing</p>
                      <CarDetails
                        points={[
                          "Removal of oxidation and haziness from the headlight lens for improved clarity.",
                          "Application of polishing compounds to restore the headlight's original transparency.",
                          "Buffing and polishing to eliminate scratches and enhance the overall appearance.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
                </div>
              </div>
              </div>
              <div className="models-div__box">

              <div className="models-div__box__img">
                <img src={CarWash} alt="CarWash" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Car Wash</p>
                      <CarDetails
                        points={[
                         "Thorough cleaning of the vehicle's exterior to remove dirt, dust, and grime.",
                         "Hand washing for meticulous attention to detail and preventing scratches.",
                         "Drying and finishing touches for a spotless and polished appearance.",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details"></div>
                  <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book your slot &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
               
              </div>
                </div>
                </div>
              </div>
            </div>


            

            
            {/* ... Repeat the above block for other models ... */}

          </div>
        
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
      </section>
    </>
  );
}

export default Models;
