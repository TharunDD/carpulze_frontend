
function Footer() {
  return (
    <>
      <footer style={{ background: '#2d2d2d', color: 'white' }}>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a wide range of car services for all your driving needs. We
                have the complete services to meet all your needs.
              </li>

      
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/models">Services</a>
              </li>
              <li>
                <a href="/testimonials">Slots</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sat: 9:00AM - 9:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li></li>
            <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+91) 96266 60671, 
                </a>
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+91) 9788860671
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carpulze@gmail.com

                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
