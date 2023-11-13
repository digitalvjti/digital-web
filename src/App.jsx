import Test from "./Test.jsx";
import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Core from "./components/core/Core.jsx";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="CoreMembers">
        <Core />
      </section>


      {/* Framer Motion Crash Course
      <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
