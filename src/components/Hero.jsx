import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b41cb9]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="violet-text-gradient">Otávio</span>!
          </h1>
          <p className={styles.heroSubText}>
            Graduating in computer science at UFPel
            <br className="sm:block hidden" /> and programming enthusiast.
          </p>
        </div>
      </div>

      <div className={styles.transitionWhole}>
        <a href="#about">
          <div className={styles.transitionBorder}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={styles.transitionBall}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
