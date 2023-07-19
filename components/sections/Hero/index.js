import Row from "../../layout/Row";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../../assets/hero_pic.png";

const Hero = () => {
  return (
    <div className="full-width-section text-center">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} sml={3} eml={9}>
        <div className="mt-48 relative">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            Hey, I{"'"}m{" "}
            <span className="text-transparent  bg-gradient-to-r from-[#FFAA5B] to-highlight1 bg-clip-text">
              Alex <span className="hidden xl:inline">Lin</span>
            </span>
          </motion.h1>
        </div>
      </Row>
      <Row  ss={1} es={7} sm={3} em={9} sl={3} el={13} sml={3} eml={9}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="subtitle text-center text-grey mb-24 mt-8"
        >
          I build <span className="text-transparent  bg-gradient-to-r from-[#FFAA5B] to-highlight1 bg-clip-text">human-centered
            </span> applications
        </motion.h2>
      </Row>
      <Row ss={1} es={7} sm={3} em={9} sl={3} el={13} sml={3} eml={9} className={"mb-16"}>
        <Image src={HeroImage} height={409} width={1040} alt="pic of me"/>
      </Row>
    </div>
  );
};

export default Hero;
