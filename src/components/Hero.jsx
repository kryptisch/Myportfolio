import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
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
      <div className="w-[1px] h-[100px] bg-secondary fixed ml-10 bottom-0 bg-[#00cea8]" />
    </section>
  );
};

export default Hero;
