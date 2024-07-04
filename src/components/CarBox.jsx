import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>{car.model}</span>
              Services:
            </div>
            <div className="pick-description__table">
              

              <div className="pick-description__table__col">
                
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
               
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                
                <span>{car.fuel}</span>
              </div>

              
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
