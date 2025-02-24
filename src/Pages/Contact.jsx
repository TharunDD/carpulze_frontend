import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in this fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 96266 60671,(+91) 9788860671
              </a>
              
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; carpulze@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; #74/1, Trichy Road,
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; (Opp. To Ashwini – Aadhirai Mahal),
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; Kangeyampalayam, Sulur – 641 401.
              </a>
              
             
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder= "Your Name"></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="hero-content__text__btns"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
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

export default Contact;
