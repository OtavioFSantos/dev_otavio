import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[20px] font-bold text-white text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] text-justify"
      >
        I’ve developed and launched mobile apps for both Android and iOS, as well as web applications using frameworks like Angular and React. I’ve worked across the full stack, from crafting user-friendly front-ends to building scalable back-end services, designing RESTful APIs, and cloud functions.
        <br className="sm:block hidden" />
        I’m comfortable with every phase of the software development process, from problem-solving and designing architecture, to writing clean code, testing, and deploying the final product. I’ve worked with cloud platforms like Google Cloud Platform (GCP) and Firebase, where I’ve integrated DevOps practices like CI/CD pipelines to improve development efficiency. I also have experience with a range of database systems, ensuring that applications are built on solid, reliable data structures.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10" style={{ justifyContent: 'center' }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
