import Row from "../../layout/Row";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="full-width-section text-center">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <div className="mt-48 relative">
          {/* <motion.h1
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 0.05, x: "-1.9rem", y: "-1.9rem" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:inline absolute"
          >
            I am{" "}
            <span className="text-transparent bg-gradient-to-r from-[#FFAA5B] to-highlight1 bg-clip-text">
              Alex <span className="hidden xl:inline">Lin</span>
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 0.05, x: "1.9rem", y: "1.9rem" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:inline absolute"
          >
            I am{" "}
            <span className="text-transparent bg-gradient-to-r from-[#FFAA5B] to-highlight1 bg-clip-text">
              Alex <span className="hidden xl:inline">Lin</span>
            </span>
          </motion.h1> */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            I am{" "}
            <span className="text-transparent  bg-gradient-to-r from-[#FFAA5B] to-highlight1 bg-clip-text">
              Alex <span className="hidden xl:inline">Lin</span>
            </span>
          </motion.h1>
        </div>
      </Row>
      <Row ss={1} es={7} sm={3} em={10} sl={3} el={13} sml={3} eml={9}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="subtitle text-center text-grey mb-48 mt-2"
        >
          The Junior Frontend Developer
        </motion.h2>
      </Row>
    </div>
  );
};

export default Hero;
