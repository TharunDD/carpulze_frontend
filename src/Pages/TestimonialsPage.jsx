import BookCar from "../components/BookSlt";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Cbook from "../components/confirmedslot";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Slots" />
        <Cbook></Cbook>
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

export default TestimonialsPage;
