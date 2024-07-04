import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy Car Service</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Services</h3>
                <p>
                We provide an extensive selection of car services tailored to suit all your driving requirements. Whether it's for a quick repair or a comprehensive overhaul, our car workshop has the expertise to meet all your automotive needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
               Our skilled and amiable workshop staff are always ready to assist you with any queries related to your vehicle. Your satisfaction and confidence in our car workshop are our top priorities and are always ready to help with any questions or concerns.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                Whether your vehicle is hitting the open road or in need of maintenance, we've got you covered with our extensive range of car services. Our dedicated team is here to ensure your car receives the care it deserves for a smooth and reliable performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
