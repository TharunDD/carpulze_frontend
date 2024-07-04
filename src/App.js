import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Contact from "./Pages/Contact";
import Logg from "./components/login";
import Sigg from "./components/siginin";
import AdminDashboard from "./components/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import Userdashbord from "./components/userdahbord";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Logg />} />
        <Route path="sigin" element={<Sigg />} />
        <Route path="udb" element={<Userdashbord></Userdashbord>} />
        <Route path="admin" element={<PrivateRoute Component={AdminDashboard}></PrivateRoute>}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
