import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import cent from './centDay.png';
import bloodDon from './bloodDonation.png';
import beach from './beachClean.png';
import career from './careergui.png';
import nexus from './nexuss.png';
const items = [
  {
    id: 1,
    title: "Centenary Day '23",
    img: cent ,
    desc: "The Centenary Day celebration at VJTI Matunga Campus marked 100 years of the institution's presence at Matunga. Notable highlights included Mr. Anil Kakodkar's presence as Chief Guest, showcasing VJTI's influence on various fields, and acknowledging accomplished alumni and dedicated staff. An exhibition displayed VJTI's innovative projects. The celebration united the VJTI community and inspired current students and faculty to continue the legacy of excellence. It was a unifying event that celebrated VJTI's history and looked forward to a promising future.",
  },
  {
    id: 2,
    title: "Raktadaan 1.0",
    img: bloodDon,
    desc: "The Raktdaan 1.0 Blood Donation Event, organized by Digital VJTI, successfully addressed a critical blood shortage. Over 100 faculty members and students participated in the event, strictly adhering to health protocols. The streamlined donation process included thorough screening and efficient blood collection. This event exemplified the spirit of unity and giving within the VJTI community, making a tangible impact with over 100 units of blood collected. It celebrated the selflessness of donors, embodying VJTI's values of compassion and social responsibility, showcasing the potential for positive change in society.",
  },
  {
    id: 3,
    title: "Beach Clean-up 2.0",
    img: beach,
    desc: "Digital VJTI and MAH EME NCC COY organized Beach Cleanup 2.0 at Dadar Beach on April 29, 2023. The event aimed to clean the beach and raise awareness about the importance of coastal preservation. Despite the summer heat, enthusiastic participants collected litter and debris, highlighting the impact of plastic pollution. The event emphasized unity and collaboration, transcending organizational boundaries. It left a lasting impact on participants, fostering a sense of environmental stewardship and setting an example of collective action for a cleaner, greener planet.",
  },
  {
    id: 4,
    title: "Career Guidance",
    img: career ,
    desc: "Digital VJTI, in collaboration with College Pond and HDFC Credila, hosted a Career Guidance & Profile Building Workshop for students aspiring to study abroad. The event on January 24th saw a packed venue, highlighting students' eagerness to explore international education opportunities. Expert counsellors, Mr. Jimeet Sanghavi and Ms. Sneha Shah, led the session, covering entrance exam preparation, profile building, the application process, and education finance planning. The workshop garnered overwhelmingly positive feedback, instilling confidence in students pursuing higher education abroad. This successful event demonstrated Digital VJTI's commitment to empowering students on their academic journeys and nurturing future global leaders.",
  },
  {
    id: 5,
    title: "Nexus",
    img: nexus ,
    desc: "NEXUS, a one-day festival by Digital VJTI in partnership with College Pond, brought together students from various Mumbai colleges for a day of competitions and technological experiences on March 5, 2023. The event featured a VR gaming zone, creative competitions like 'Seal the Reel' and 'LENSATIONAL,' and a 'Battle of Wits' debate competition. Digital content creator Anmol Sachar hosted a talk show, offering insights into the world of digital media. The event was a grand success, thanks to the dedicated efforts of the Digital VJTI committee, and it left a lasting impact on the attendees. Special thanks were extended to the committee and Anmol Sachar, along with gratitude to all the participants and attendees for making NEXUS a memorable day of fun and technology.",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div style={{padding:'20px'}} className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Events </h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
