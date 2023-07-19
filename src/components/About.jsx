import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useInView } from "react-intersection-observer";
const ServiceCard = ({ title, index, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when it comes into view
    threshold: 0.1,
  });
  return (
    <Tilt
      options={{ max: 30, scale: 1.1, speed: 300 }}
      className="xs:w-[250px] sm:w-[220px] w-full flex justify-evenly "
    >
      <motion.div
        ref={ref}
        variants={fadeIn("right", "spring", (1 + index) * 0.5, 1)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
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
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a software developer, I possess expertise in TypeScript and
        JavaScript, along with in-depth knowledge of frameworks such as React,
        Node.js, and Three.js. I excel in quickly grasping new concepts and
        closely collaborating with clients to develop efficient, scalable, and
        intuitive solutions that address real-world challenges.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
