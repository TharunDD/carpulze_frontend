import { useEffect, useState } from "react";
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
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "../API/axios";

import { useSelector, useDispatch } from 'react-redux';

function BookCar() {
  const islog = useSelector((state) => state.cart.isAuthenticated);
  const us = useSelector((state) => state.cart.user);
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [comp, setcomp] = useState("");
  const [vechileno, svn] = useState("");
  const [typ, styp] = useState("");
  const [compy, stcomp] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlesvn= (e) => {
    svn(e.target.value);
  };

  const handlecomp = (e) => {
    setcomp(e.target.value);
  };
  const handletype= (e) => {
    styp(e.target.value);
  };
  const handlecompany= (e) => {
    stcomp(e.target.value);
  };
  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if(
      pickTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      // modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);
  const Book=()=>{
    console.log(us);
    const requestData = {
      name: name,
      comp: comp,
      vechileno: vechileno,
      pickTime: pickTime,
      carType: carType,
      type:typ,
      brand:compy
    };
    axios.post('/book/booking', requestData, {
  headers: {
    'Authorization': `Bearer ${us}` // Adding JWT token as Authorization header
  }
})
.then(response => {
  console.log('Response:', response.data);
  NotificationManager.success("Your slot has been booked successfully")
})
.catch(error => {
  console.error('Error:', error);
});
  }
  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    Book();
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  
  

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Preventive Maintenance Schedule":
      imgUrl = PreventiveMaintenanceSchedule;
      break;
    case "Runnning Repair":
      imgUrl = RunnningRepair;
      break;
    case "A/C Works":
      imgUrl = ACWorks;
      break;
    case "Engine Works":
      imgUrl = EngineWorks;
      break;
    case "Denting":
      imgUrl = Denting;
      break;
    case "Painting":
      imgUrl = Painting;
      break;
    case "Wash & Wax":
      imgUrl = WashWax;
      break;
    case "Rubbing & Polish":
      imgUrl = RubbingPolish;
      break;    
    case "Teflon Coating":
      imgUrl = TeflonCoating;
      break;
    case "Interior Cleaning":
      imgUrl = InteriorCleaning;
      break;
    case "Headlight Polishing":
      imgUrl = HeadlightPolishing;
      break;
    case "Car Wash":
      imgUrl = CarWash;
      break;      
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a slot</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm your slot{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Service <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your Car Service</option>
                    <option value="Preventive Maintenance Schedule">Preventive Maintenance Schedule</option>
                    <option value="Running Repair">Running Repair</option>
                    <option value="A/C Works">A/C Works</option>
                    <option value="Engine Works">Engine Works</option>
                    <option value="Denting">Denting</option>
                    <option value="Painting">Painting</option>
                    <option value="Wash & Wax">Wash & Wax</option>
                    <option value="Rubbing & Polish">Rubbing & Polish</option>
                    <option value="Teflon Coating">Teflon Coating</option>
                    <option value="Interior Cleaning">Interior Cleaning</option>
                    <option value="Headlight Polishing">Headlight Polishing</option>
                    <option value="Car Wash">Car Wash</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Date <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>
                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Reservation Date & Time</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Date & Time</h6>
                  <p>
                    {pickTime} 
                  </p>
                </div>
              </span>
            </div>

          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car Service-</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Viechile No <b>*</b>
                </label>
                <input
                  value={vechileno}
                  onChange={handlesvn}
                  type="text"
                  placeholder="Enter your vechile number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Complient <b>*</b>
                </label>
                <input
                  value={comp}
                  onChange={handlecomp}
                  type="text"
                  placeholder="Give us a short exaplaition about ur complaint"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
  <span>
    <label>
      Type<b>*</b>
    </label>
    <select
      value={typ}
      onChange={handletype}
    >
      <option value="">Select type...</option>
      <option value="Electric">Electric</option>
      <option value="Petrol">Petrol</option>
      <option value="Diesel">Diesel</option>
    </select>
    <p className="error-modal">This field is required.</p>
  </span>
</div>

             <div className="info-form__1col">
              <span>
                <label>
                  Company<b>*</b>
                </label>
                <input
                  value={compy}
                  onChange={handlecompany}
                  type="text"
                  placeholder="Give us a short exaplaition about ur complaint"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default BookCar;

