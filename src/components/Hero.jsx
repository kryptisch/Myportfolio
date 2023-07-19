import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { social } from "../constants";
import { motion, transform } from "framer-motion";
import { slideIn } from "../utils/motion";
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
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Rohith</span>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Building Web Applications that
            <br className="sm:block hidden" /> Transforms Ideas into Seamless
            Web Experiences
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div>
        {showDiv && (
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className=" fixed flex flex-col left-10 bottom-[-10px] lg:flex hidden items-center z-999"
          >
            <div className="flex flex-col justify-center  ">
              {social.map((item, index) => (
                <div
                  key={index}
                  className="mt-3 cursor-pointer"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <img
                    src={item.Icon}
                    alt={item.name}
                    className="w-[22px] h-[22px]"
                  />
                </div>
              ))}
            </div>
            <div className="w-[2px] h-[120px] bg-[#00cea8] mt-4" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
