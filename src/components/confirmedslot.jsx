import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

function Cbook() {
  const islog = useSelector((state) => state.cart.isAuthenticated);
  const us = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false); //  class - active-modal
  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div><h1>dheigf</h1></div>
      </section>
    </>
  );
}


export default Cbook;

