<<<<<<< HEAD
import Sidebar from "../sidebar/Sidebar";
=======
import Sidebar from "../sidebar/Sidebar.jsx";
>>>>>>> f2ac4f542beb0c90f2b08277124b50c39ac86c90
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DIGITAL VJTI
        </motion.span>
        <div className="social">
          {/* <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
