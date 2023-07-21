import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { social } from "../constants";
import { motion, transform } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      const navbarHeight = 680;

      if (scrollHeight > navbarHeight) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#e76a3d]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#e76a3d]">Rohith</span>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Building Web Applications that
            <br className="sm:block hidden" /> Transforms Ideas into Seamless
            Web Experiences
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {showDiv && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" fixed flex flex-col left-5 bottom-[-10px] lg:flex hidden items-center z-9"
        >
          <div className="flex flex-col justify-center  ">
            {social.map((item, index) => (
              <motion.div
                key={index}
                className="mt-5 cursor-pointer"
                onClick={() => window.open(item.url, "_blank")}
                whileHover={{ y: -2 }}
              >
                <img
                  src={item.Icon}
                  alt={item.name}
                  className="w-[22px] h-[22px]"
                />
              </motion.div>
            ))}
          </div>
          <div className="w-[2px] h-[120px] bg-[#555f9b] mt-5" />
        </motion.div>
      )}
      {showDiv && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col top-[80px] right-5 fixed z-999 justify-center items-center "
        >
          <div className="w-[2px] h-[120px] bg-[#555f9b] mb-4 " />
          <motion.a
            href="mailto:rohithdigajerla4@gmail.com"
            whileHover={{ scaleY: 1.02 }}
            className="cursor-pointer text-[#00cea8] "
            style={{
              writingMode: "vertical-rl",
            }}
          >
            rohithdigajerla4@gmail.com
          </motion.a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
