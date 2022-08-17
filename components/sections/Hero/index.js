import Row from "../../layout/Row";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="full-width-section text-center md:text-left">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-48 fade-from-left relative after:absolute after:inset-6 after:content-[''] after:opacity-20 after:-z-10"
        >
          I am{" "}
          <span className="text-highlight1">
            Alex <span className="hidden xl:inline">Lin</span>
          </span>
        </motion.h1>
      </Row>
      <Row ss={1} es={7} sm={3} em={10} sl={4} el={13} sml={3} eml={9}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="subtitle md:text-right text-grey mb-48 fade-from-right"
        >
          The Junior Frontend Developer
        </motion.h2>
      </Row>
    </div>
  );
};

export default Hero;
